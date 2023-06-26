pipeline {
    agent any
    
    environment {
        APP_LINK = 'https://rocky-plateau-63232-d97169abfda4.herokuapp.com/ '
    }

    stages {
        stage('Clone Repository'){ 
            steps {
                echo 'Cloning Repository'
                git 'https://github.com/Musyoki-Wambua/gallery'
                 slackSend channel: 'joseph_IP1', color: 'good', message: 'Git Clone'
            }
        }
        stage('Check Node.js and npm') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                }
        }
        stage('Install Dependancies') {
            steps {
                echo 'Running npm install'
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Run npm run test'
                sh 'npm run test'
            }
        }
        stage('Deploy to Heroku'){
            steps{
                echo 'Deploying to heroku...'
                slackSend channel:'joseph_IP1' color:'good', message:'Deploying App to Heroku - Job Name - ${JOB_NAME} | Build number ${BUILD_NUMBER} | link ${APP_LINK}`
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){ 
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/rocky-plateau-63232.git master'
                }
            }
        }        
    }
    
    post {
        success {
            slackSend(channel:'joseph_IP1', color:'good', message:"Gallery Application deployment successful. Job Name - ${JOB_NAME} | Build number ${BUILD_NUMBER} | link ${APP_LINK}")
        }

        failure {
            slackSend(channel:'joseph_IP1', color:'danger', message:"Gallery Application deployment failed. Job Name - ${JOB_NAME} | Build number ${BUILD_NUMBER}")
        }
    }
}