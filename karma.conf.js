module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'), // Asegúrate de tener karma-coverage instalado
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Puedes agregar opciones de configuración para Jasmine aquí
      },
      clearContext: false // Dejar visible la salida de Jasmine Spec Runner en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true // Remueve las trazas duplicadas
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'), // Ruta donde se guardarán los informes de cobertura
      subdir: '.',
      reporters: [
        { type: 'html' }, // Generar informe HTML
        { type: 'text-summary' } // Resumen en texto
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage'], // Agregar 'coverage' como reportero
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
