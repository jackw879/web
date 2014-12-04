var orm=require('orm');
var config=require('../config.js');
var connection=null;

function setDB(db,cb){
	require('./questions')(orm,db);
	require('./answers')(orm,db);
	require('./q_comments')(orm,db);
	require('./a_comments')(orm,db);

	return cb(null,db);
	
}

module.exports=function(cb){
	if(connection)
		return cb(null,connection);

	orm.connect(config.database,function(err,db){
		if(err) return cb(err);
		connection=db;
		db.settings.set('instance.returnAllErrors', true);
		setDB(db,cb);
	});
}