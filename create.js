var models=require('./models/models.js');
var orm=require('orm');


models(function(err,db){

	if(err) throw err;

	db.drop(function(err){
		if(err) throw err;
		db.sync(function(err){

			if(err) throw err;

			db.models.question.create({
				title:"first question",
				contents:"this is the first question"
			},function(err,question){
				if(err){
					console.log(err);
					throw err;
				}
				
				console.log("create a test question");
			});

			db.models.answer.create({
				title:"answer of first question",
				contents:"this is the first answer",
				question_id:1
			},function(err,answer){
				if(err){
					console.log(err);
					throw err;
				}
				
				console.log("create a test answer");
			});

			db.models.q_comment.create({
				title:"comment of first question",
				contents:"this is the first comment",
				question_id:1
			},function(err,q_comment){
				if(err){
					console.log(err);
					throw err;
				}
				
				console.log("create a test question comment");
			});

			db.models.a_comment.create({
				title:"comment of first answer",
				contents:"this is the comment of first answer",
				answer_id:1
			},function(err,a_comment){
				if(err){
					console.log(err);
					throw err;
				}

				console.log("create a test answer comment");
				db.close();
			});
		});
	});
})