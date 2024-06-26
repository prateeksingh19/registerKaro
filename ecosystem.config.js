module.exports = {
  apps : [{
    script: 'npm start',
  }
    ],

  deploy : {
    production : {
      key:'key2.pem',
      user : 'ubuntu',
      host : '51.20.118.116',
      ref  : 'origin/main',
      repo : 'https://github.com/dev-1ce/RegisterKaro.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh &&  npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':"ForwardAgent=yes"
    }
  }
};
