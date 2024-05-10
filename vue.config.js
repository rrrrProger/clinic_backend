// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname + '/cloud_clinic_frontend'
      }
    },
    entry: {
      app: './cloud_clinic_frontend/src/main.ts'
    }
  }
}
