module.exports = {
  apps: [
    {
      name: 're-chinese',
      script: 'npx next start -p 3759',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
