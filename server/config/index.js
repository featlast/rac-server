require('dotenv').config();

const config = {
	port: process.env.PORT || 4000,
	hostname: process.env.HOSTNAME || '127.0.0.1',
	localhost: process.env.LOCALHOST,
	database: {
		protocol: process.env.DATABASE_PROTOCOL,
		url: process.env.DATABASE_URL,
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
	},
	cors: {
		origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
	},
	token: {
		secret: process.env.TOKEN_SECRET,
		emailSecret: process.env.TOKEN_SECRET_EMAIL,
		expires: process.env.TOKEN_EXPIRES,
	},
	mail: {
		apiKey: process.env.EMAIL_APIKEY,
	},
};

module.exports = config;
