var orm = require('orm');

module.exports=function(orm,db){
	var a_comment = db.define('a_comment',{
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
        }	
	});
	a_comment.hasOne('answer',db.models.answer,{reverse:'a_comment',autoFetch:true});
}