pipeline {
    agent any 

    stages {
        stage('CLone Repository'){ 
            steps {
                echo 'Cloning Repository'
                git 'https://github.com/Musyoki-Wambua/gallery'
            }
        }
        stage('Install Dependancies') {
            steps {
                echo 'Running npm install'
                sh 'npm install'
            }
        }
    }
}