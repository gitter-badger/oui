({
    baseUrl: '.',
    mainConfigFile: 'common.js',
    findNestedDependencies: true,

    out: 'lego.min.js',
    // optimize: 'uglify2',
    optimize: 'none',

    include: ['app/directives/poptip'],
    insertRequire: ['lib/vue.js'],
    name: '../../bower_components/almond/almond.js',
    wrap: true
})