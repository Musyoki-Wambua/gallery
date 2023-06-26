pipeline {
    agent any 

    stages {
        stage('CLone Repository'){ 
            steps {
                echo 'Cloning Repository'
                git 'https://github.com/Musyoki-Wambua/gallery'
                 slackSend channel: 'joseph_IP1', color: 'good', message: 'Git Clone'
            }
        }
        stage('Install Dependancies') {
            steps {
                echo 'Running npm install'
                sh 'npm install'
            }
        }
        sstage('Run Tests') {
            steps {
                echo 'Run npm run test'
                sh 'npm run test'
            }
        }
        stage('Deploy to Heroku'){
            steps{
                echo 'Deploying to heroku...'
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: "HEROKU_CREDENTIALS")]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@https://git.heroku.com/rocky-plateau-63232.git master'
                }
            }
        }        
    }
}