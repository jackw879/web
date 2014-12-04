var path  =  require('path');

var config = {
	path :path.normalize(path.join(__dirname,'..')),
	port :process.env.NODE_PORT||3000,
	database:{
		protocol:"sqlite",
		pathname:path.join(__dirname,'sqlite.db'),
		query	:{pool:true}
	}
};

module.exports = config;	