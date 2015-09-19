module.exports = {
	port: 8002,
	bowerdir:'/home/vagrant/bower_components',
	mongoURL:'mongodb://localhost:27017/test',
	lib: {
		'requirejs.js' : 'require.js',
		'jquery.js' : 'dist/jquery.min.js',
		'jquery-cookie.js' : 'jquery.cookie.js',
		'jquery-ui.js' : 'jquery-ui.min.js',
		'knockout.js' : 'dist/knockout.js',
		'backbone.js' : 'backbone-min.js',
		'underscore.js' : 'underscore-min.js',
		'knockback.js' : 'knockback.min.js',
		'mdl.css' : 'material.css',
		'mdl.js' : 'material.js',
		'bootstrap.css' : 'dist/css/bootstrap.min.css',
		'bootstrap.js' : 'dist/js/bootstrap.min.js',
		'boot-mdl.css' : 'dist/css/material.min.css',
		'boot-mdl.js' : 'dist/js/material.min.js',
		'boot-mdl.roboto.css' : 'dist/css/roboto.min.css',
		'boot-mdl.palette.css' : 'dist/css/material-fullpalette.min.css',
		'boot-mdl.ripples.css' : 'dist/css/ripples.min.css'
	},
	libMap: {
		'jquery-cookie' : 'jquery.cookie',
		'mdl' : 'material-design-lite',
		'boot-mdl' : 'bootstrap-material-design'
	}
};