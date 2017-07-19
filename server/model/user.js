var mongoose = require('mongoose');

var User = mongoose.model('User', {
	name: {
		type: String,
		require: true,
		minlength: 1
	},
	email: {
		type: String,
		trim: true,
		require: true,
		minlength: 1
	}
});

module.exports = {User};