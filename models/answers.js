var orm = require('orm');

module.exports=function(orm,db){
	var answer = db.define('answer',{
		title: {type:'text'},
        contents: {type:'text', big:true},
        createTime: {type:'date', time:true}
	},
	{
		hooks:{
			beforeValidation:function(){
				this.createTime=new Date();
			}
		},
		validations:{
            title:[orm.enforce.notEmptyString()],
            contents:[orm.enforce.notEmptyString()]
		},
		methods:{
            serialize: function(){
             return {
                    title : this.title,
                    contents : this.contents,
                    createTime : this.createTime,
                }
            }
        },
        autoFetch:true,
		autoFetchLimit : 2,
		cache:false
	});
	//when set autoFetch as true,user can find answer of a question directly
	answer.hasOne('question',db.models.question,{reverse:'answers',autoFetch:true});
	answer.sync(function (err) {
		err && console.log(err);
	});
}