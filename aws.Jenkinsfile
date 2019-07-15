node{

    def app
    def branch
    def tag

    stage('Calculate Branch'){
        branch = env.BRANCH_NAME
    }
    stage('Checkout'){
        git url: 'http://luyennv@192.168.105.11:7990/scm/cm/customer-dashboard.git', branch: branch, credentialsId: 'luyen_bitbucket'
    }

    stage('Get Commit Hash'){
      env.TAG = sh(returnStdout: true, script: 'git rev-parse --short HEAD')
      tag = env.TAG.substring(0,7)
      sh "echo ${tag}"
    }

    stage('Build Docker Container'){
        if (branch == 'develop'){
            app = docker.build("${env.DEV_REGISTRY_URL}/${env.DEV_NAMESPACE}/customer-dashboard:0.1", "-f ./dockerfiles/dev.Dockerfile .")
        }else{
            sh '$(aws ecr get-login --no-include-email --region us-east-1)'
            app = docker.build("${env.REGISTRY_URL}/stag-cyber-targeting/customer-dashboard:0.1", "-f ./dockerfiles/sit.Dockerfile .")
        }
    }

    stage('Push image') {
        if (branch == 'develop'){
          docker.withRegistry('http://' + env.DEV_REGISTRY_URL, env.DEV_REGISTRY_TOKEN) {
            app.push("${env.TAG}")
          }
        }else{
          app.push("${env.TGT_DEV_VERSION}-${BUILD_NUMBER}")
        }
    }

    stage('Deploy image'){
        if (branch == 'develop'){
          sh "kubectl config set-cluster ${env.ICP_CLUSTER} --server=https://${env.ICP_CLUSTER_IP} --insecure-skip-tls-verify=true"
                sh "kubectl config set-context ${env.ICP_CLUSTER}-context --cluster=${env.ICP_CLUSTER}"
                withCredentials([string(credentialsId: env.ICP_CREDENTIAL, variable: 'PW1')]) {
                    sh "kubectl config set-credentials luyennv --token=${PW1}"
                }
                sh "kubectl config set-context ${env.ICP_CLUSTER}-context --user=luyennv --namespace=${env.DEV_NAMESPACE}"
                sh "kubectl config use-context ${env.ICP_CLUSTER}-context"
                sh "kubectl set image deployments/customer-dashboard customer-dashboard=${env.DEV_REGISTRY_URL}/${env.DEV_NAMESPACE}/customer-dashboard:${tag} --namespace=${env.DEV_NAMESPACE}"
        }else{
          sh 'aws eks update-kubeconfig --name prod-eks-cluster'
          sh 'kubectl config set-context $(kubectl config current-context) --namespace=stag-cyber-targeting'
          sh "kubectl set image deployments/customer-dashboard customer-dashboard=${env.REGISTRY_URL}/stag-cyber-targeting/customer-dashboard:${env.TGT_DEV_VERSION}-${BUILD_NUMBER} --namespace=stag-cyber-targeting"
        }
      }

}
