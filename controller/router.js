var question=require('./questionCtrl.js'),
	answer=require('./answerCtrl.js'),
	q_comment=require('./q_commentCtrl.js'),
	a_comment=require('./a_commentCtrl.js');


module.exports=function(app)
{
  app.get('/', question.getAllQuestions);
  app.get('/about',function(req,res){
	 res.render('about.html');
  });
  app.get('/askquestion',function(req,res){
	 res.render('AskQuestion.html');
  });

  app.get('/questions', question.getAllQuestions);
  app.get('/questions/:question_id',question.getQuestion);
  app.post('/questions',question.createQuestion);
  app.put('/questions/:question_id',question.updateQuestion);
  app.delete('/questions/:question_id',question.delQuestion); 

  app.get('/questions/:question_id/answers', answer.getAllAnswers);
  app.get('/questions/:question_id/answers/:answer_id',answer.getAnswer);
  app.post('/questions/:question_id/answers',answer.createAnswer);
  app.put('/answers/:answer_id',answer.updateAnswer);
  app.delete('/answers/:answer_id',answer.delAnswer);
  
  app.get('/questions/:question_id/qcomments', q_comment.getAllQuestionComments);
  app.get('/questions/:question_id/qcomments/:qcomment_id',q_comment.getQuestionComment);
  app.post('/questions/:question_id/qcomments',q_comment.createQuestionComment);
  app.put('/qcomments/:qcomment_id',q_comment.updateQuestionComment);
  app.delete('/qcomments/:qcomment_id',q_comment.delQuestionComment);
  
  app.get('/answers/:answer_id/acomments', a_comment.getAllAnswersComments);
  app.get('/answers/:answer_id/acomments/:acomment_id',a_comment.getAnswerComment);
  app.post('/answers/:answer_id/acomments',a_comment.createAnswerComment);
  app.put('/acomments/:acomment_id',a_comment.updateAnswerComment);
  app.delete('/acomments/:acomment_id',a_comment.delAnswerComment);

}