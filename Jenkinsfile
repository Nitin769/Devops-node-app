pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: '<your-repo-url>'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-node-app:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f devops-node-app || true'
            }
        }

        stage('Deploy New Container') {
            steps {
                sh 'docker run -d --name devops-node-app -p 3000:3000 devops-node-app:latest'
            }
        }

        stage('Health Check') {
            steps {
                sh 'curl -f http://localhost:3000/health'
            }
        }
    }
}
