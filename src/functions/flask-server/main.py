import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from pandas import read_csv
from pandas import datetime
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa import statespace
from pandas.tseries.offsets import DateOffset
from statsmodels.tsa.stattools import adfuller
import statsmodels.api as sm
from flask_cors import CORS

from flask import Flask, jsonify


def parser(x):
    return datetime.strptime('20' + x, '%Y-%m')


def adfuller_test(amount):
    result = adfuller(amount)
    labels = ['ADF Test Statistic', 'P-Value', '#Lags Used', 'Number of Observations Used']
    for value, label in zip(result, labels):
        print(label + ' : ' + str(value))
    # if result[1]<=0.05:
    #   print("Strong evidence against the null hypothesis , reject the null hypothesis. Data has not unit root and is stationary")
    # else:
    #   print("Week evidence aginst null hypothesis, time series has a unit root, indicating it is non-stationary")


def getPredictedValue():
    series = read_csv('data/final_data.csv', header=0, parse_dates=[0], index_col=0, squeeze=True, date_parser=parser)
    series.columns.tolist()
    adfuller_test(series["Total_Amount"])

    series['Total_Amount first Defferences'] = series['Total_Amount'] - series['Total_Amount'].shift(1)
    series['Total_Amount'].shift(1)
    series.head(14)

    series['Total_Seasonal first Defferences'] = series['Total_Amount'] - series['Total_Amount'].shift(12)
    series.head(14)

    series['Total_Seasonal first Defferences 1'] = series['Total_Seasonal first Defferences'] - series[
        'Total_Seasonal first Defferences'].shift(12)
    series.head(26)

    # agin test dickey fuller test
    adfuller_test(series["Total_Seasonal first Defferences 1"].dropna())

    series["Total_Seasonal first Defferences 1"].dropna().plot()

    fig = plt.figure(figsize=(12, 8))
    ax1 = fig.add_subplot(211)
    fig = sm.graphics.tsa.plot_acf(series['Total_Seasonal first Defferences 1'].iloc[25:], lags=20, ax=ax1)

    ax2 = fig.add_subplot(212)
    fig = sm.graphics.tsa.plot_pacf(series["Total_Seasonal first Defferences 1"].iloc[25:], lags=20, ax=ax2)

    # fit model
    from statsmodels.tsa.arima.model import ARIMA
    model = ARIMA(series["Total_Amount"], order=(1, 2, 1))
    model_fit = model.fit()
    model = sm.tsa.statespace.SARIMAX(series['Total_Amount'], order=(1, 2, 1), seasonal_order=(1, 2, 1, 12))
    result = model.fit()

    series['Forecast'] = result.predict(start=60, end=72, dynamic=True)
    series[["Total_Amount", "Forecast"]].plot(figsize=(12, 8))

    future_dates = [series.index[-1] + DateOffset(months=x) for x in range(0, 12)]

    future_datest_series = pd.DataFrame(index=future_dates[1:], columns=series.columns)
    future_datest_series.tail()

    future_series = pd.concat([series, future_datest_series])

    future_series['Forecast'] = result.predict(start=72, end=84, dynamic=True)
    future_series[['Total_Amount', 'Forecast']].plot(figsize=(12, 8))
    return series['Forecast'].dropna()


app = Flask(__name__)

CORS(app)


@app.route('/values', methods=['GET'])
def getValues():
    values = getPredictedValue()
    response = jsonify(
        {'January': int(values[0])},
        {'February': int(values[1])},
        {'March': int(values[2])},
        {'April': int(values[3])},
        {'May': int(values[4])},
        {'June': int(values[5])},
        {'July': int(values[6])},
        {'August': int(values[7])},
        {'September': int(values[8])},
        {'October': int(values[9])},
        {'November': int(values[10])},
        {'Devember': int(values[11])},
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


# @app.route("/values",methods=['Get'])
# def home():
#     values = getPredictedValue()
#     valueDict={'January': int(values[0]),
#                'February': int(values[1]),
#                'March': int(values[2]),
#                'April': int(values[3]),
#                'May': int(values[4]),
#                'June': int(values[5]),
#                'July': int(values[6]),
#                'August': int(values[7]),
#                'September': int(values[8]),
#                'October': int(values[9]),
#                'November': int(values[10]),
#                'December': int(values[11])}
#     num = 1
#     print(valueDict)
#
#     return jsonify(valueDict);
#

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # print(getPredictedValue())
    app.run()
