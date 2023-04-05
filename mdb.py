# Import required modules
from flask import Flask, jsonify, request
from pymongo import MongoClient
from sklearn.neighbors import KNeighborsRegressor
import geopy.distance

# Initialize Flask app
app = Flask(__name__)

# Initialize MongoDB client and database
client = MongoClient('mongodb://localhost:27017/')
db = client['blood_bank']

# Load blood inventory data from MongoDB
inventory_data = list(db.blood_inventory.find())

# Load blood request data from MongoDB
request_data = list(db.blood_requests.find())

# Define KNN model and fit to inventory data
knn_model = KNeighborsRegressor(n_neighbors=5)
inventory_x = [[d['blood_type']] for d in inventory_data]
inventory_y = [d['quantity'] for d in inventory_data]
knn_model.fit(inventory_x, inventory_y)

# Define helper function to calculate distance between two points
def calculate_distance(coords1, coords2):
    return geopy.distance.distance(coords1, coords2).km

# Define endpoint to predict blood needs for a specific location
@app.route('/blood_needs', methods=['POST'])
def predict_blood_needs():
    # Parse input data
    input_data = request.get_json()
    input_location = input_data['location']
    input_month = input_data['month']
    input_year = input_data['year']
    
    # Find all blood requests within 50km of input location
    nearby_requests = []
    for request in request_data:
        if calculate_distance(request['location']['coordinates'], input_location['coordinates']) <= 50:
            nearby_requests.append(request)
    
    # Predict total blood needs for nearby requests using KNN model
    total_blood_needs = 0
    for request in nearby_requests:
        blood_type = request['blood_type']
        prediction = knn_model.predict([[blood_type]])
        total_blood_needs += prediction[0] * request['units']
    
    # Return predicted blood needs for input month and year
    response_data = {
        'location': input_location,
        'month': input_month,
        'year': input_year,
        'blood_needs': total_blood_needs
    }
    return jsonify(response_data)

# Define endpoint to notify donors of blood requests
@app.route('/blood_requests', methods=['GET'])
def notify_donors():
    # Parse input data
    input_data = request.get_json()
    input_location = input_data['location']
    
    # Find all blood requests within 50km of input location
    nearby_requests = []
    for request in request_data:
        if calculate_distance(request['location']['coordinates'], input_location['coordinates']) <= 50 and request['status'] == 'Pending':
            nearby_requests.append(request)
    
    # Notify donors of nearby requests
    response_data = []
    for request in nearby_requests:
        donor_data = {
            'blood_type': request['blood_type'],
            'location': request['location'],
            'units': request['units']
        }
        response_data.append(donor_data)
    return jsonify(response_data)

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
