pipeline {
  agent any

  environment {
    APP_NAME = 'save-heart-ml-app'
    APP_VERSION = sh(script: 'git describe --always --tags', returnStdout: true).trim()
    DOCKER_REGISTRY = 'dockerhub'
    DOCKER_IMAGE_NAME = "${DOCKER_REGISTRY}/save-heart-ml-app"
    DOCKER_IMAGE_TAG = "${DOCKER_IMAGE_NAME}:${APP_VERSION}"
  }

  stages {
    stage('Checkout') {
      steps {
        // Checkout the Git repository
        git url: 'https://github.com/Dulmina98/save-hearts.git'
      }
    }

    stage('Lint') {
      steps {
        // Run linters on the code
        sh 'pip install -r requirements.txt'
        sh 'flake8 .'
      }
    }

    stage('Unit Test') {
      steps {
        // Run unit tests
        sh 'pytest --cov=src tests/'
      }
    }

    stage('Code Coverage') {
      steps {
        // Generate code coverage report
        sh 'coverage xml'
        sh 'coverage html'
      }
      post {
        always {
          // Archive the code coverage report
          archiveArtifacts artifacts: 'htmlcov/**'
          publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'htmlcov', reportFiles: 'index.html', reportName: 'Code Coverage Report'])
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        // Build the Docker image for the application
        sh "docker build -t ${DOCKER_IMAGE_TAG} ."
      }
      post {
        always {
          // Push the Docker image to Docker Hub
          withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
            sh "docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}"
            sh "docker push ${DOCKER_IMAGE_TAG}"
          }
        }
      }
    }

    stage('Deploy to Staging') {
      steps {
        // Deploy the application to a staging environment using Docker Compose
        sh "sed -i 's#<DOCKER_IMAGE_TAG>#${DOCKER_IMAGE_TAG}#g' docker-compose.staging.yml"
        sh "docker-compose -f docker-compose.staging.yml up -d"
      }
    }
    post {
      always {
        // Show the application logs in Jenkins
        sh 'docker-compose -f docker-compose.staging.yml logs --no-color'
      }
    }

    stage('Functional Test') {
      steps {
        // Run functional tests on the deployed application
        sh 'pytest --cov=src tests/functional/'
      }
    }

    stage('Approval') {
      steps {
        // Send an email notification for approval
        emailext (
          subject: "Save Heart App Deployed to Staging - Approval Required",
          body: "The Save Heart App has been deployed to the staging environment and is ready for approval. Please review the changes and approve or reject the deployment.",
          to: "test123@gmail.com",
          from: "admin@savehearts.lk",
          replyTo: "test123@gmail.com",
          attachLog: true
        )
      }
      post {
        always {
          // Archive the code coverage report
          archiveArtifacts artifacts: 'htmlcov/**'
          publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'htmlcov', reportFiles: 'index.html

pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        sh 'mvn clean package'
      }
    }
    
    stage('Test') {
      steps {
        sh 'mvn test'
      }
    }
    
    stage('Deploy') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh 'docker build -t your-docker-username/blood-bank-prediction .'
          sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
          sh 'docker push your-docker-username/blood-bank-prediction'
        }
        sh 'kubectl apply -f kubernetes.yaml'
      }
    }
  }
}
