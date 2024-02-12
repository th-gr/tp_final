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
                    sh 'npm install'
                }
                dir('Pokereact') {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('Pokenode') {
                    sh 'npm run build'
                }
                dir('Pokereact') {
                    sh 'npm run build'
                }
            }
        }
    }
}