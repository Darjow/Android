module.exports = {
	cors: {
		origins: ['http://localhost:9000/'],
		maxAge: 3 * 60 * 60, // 3h in seconds
	},
	database: {
    client: 'mysql2',
		host: 'localhost',
    port: 3306,
    name: 'android_app',
    username: "root",
    password:"root",
    typeCast: function(field, next) {
      if (field.type == 'TINY' && field.length == 1) {
          return (field.string() == '1')
      }
      return next();
    }
  },
};