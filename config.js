module.exports = {
	port: 8002,
	bowerdir:'/home/vagrant/bower_components',
	mongoURL:'mongodb://localhost:27017/test',
	lib: {
		'require.js' : 'require.js',
		'jquery.js' : 'dist/jquery.min.js',
		'jquery.cookie.js' : 'jquery.cookie.js',
		'knockout.js' : 'dist/knockout.js',
		'backbone.js' : 'backbone-min.js',
		'underscore.js' : 'underscore-min.js',
		'knockback.js' : 'knockback.min.js',
		'mdl.css' : 'material.css',
		'mdl.js' : 'material.js'
	},
	libMap: {
		'mdl' : 'material-design-lite',
		'require' : 'requirejs'
	}
};