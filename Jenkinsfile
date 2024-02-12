pipeline {
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
                        docker.build('pokereact')
                    }
                }
          }
        }
    }
}