pipeline {
    environment {
        registry = 'thomasgbz/tp_final'
        registryCredential = 'dockerhub'
    }

    agent any

    stages {
        stage('Git checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                dir('Pokenode') {
                    bat 'npm install'
                }
                dir('Pokereact') {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('Pokereact') {
                    bat 'npm run build'
                }
            }
        }

        stage('Build Docker image') {
            steps {
                dir('Pokereact') {
                    script {
                        dockerImage = docker.build.registry + ":$BUILD_NUMBER"
                    }
                }
          }
        }
        
    }
}