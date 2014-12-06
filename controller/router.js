var question=require('./questionCtrl.js'),
	answer=require('./answerCtrl.js'),
	q_comment=require('./q_commentCtrl.js'),
	a_comment=require('./a_commentCtrl.js');

//routers and method to render html page
module.exports=function(app)
{
  app.get('/', question.getAllQuestions);
  
  app.get('/about',function(req,res){
	 res.render('about.html');
  });
  app.get('/askquestion',function(req,res){
	 res.render('AskQuestion.html');
  });
 app.get('/questions/:question_id/questionComment',function(req,res){
    res.render('questionComment',{id:req.params.question_id});
  });
 app.get('/questions/:question_id/questionEdit',function(req,res){
    res.render('questionEdit',{id:req.params.question_id});
  });
 
//question router part
  app.get('/questions', question.getAllQuestions);  //get all questions
  app.get('/questions/:question_id',question.getQuestion); //get a question via question id
  app.post('/questions',question.createQuestion); //create a question by post method
  app.put('/questions/:question_id/',question.updateQuestion); // update a question by put method(via question id)
  app.delete('/questions/:question_id',question.delQuestion); //delete a question by question id
//answer router part
  app.get('/questions/:question_id/answers', answer.getAllAnswers);//get all answers of a question(address a question by question id)
  app.get('/questions/:question_id/answers/:answer_id',answer.getAnswer);//get a answer of a question(address the answer by question id and answer id)
  app.post('/questions/:question_id/answers',answer.createAnswer);
  app.put('/answers/:answer_id',answer.updateAnswer);
  app.delete('/answers/:answer_id',answer.delAnswer);
//question router part 
  app.get('/questions/:question_id/qcomments', q_comment.getAllQuestionComments);
  app.get('/questions/:question_id/qcomments/:qcomment_id',q_comment.getQuestionComment);
  app.post('/questions/:question_id/qcomments',q_comment.createQuestionComment);
  app.put('/qcomments/:qcomment_id',q_comment.updateQuestionComment);
  app.delete('/qcomments/:qcomment_id',q_comment.delQuestionComment);
//answer router part
  app.get('/answers/:answer_id/acomments', a_comment.getAllAnswersComments);
  app.get('/answers/:answer_id/acomments/:acomment_id',a_comment.getAnswerComment);
  app.post('/answers/:answer_id/acomments',a_comment.createAnswerComment);
  app.put('/acomments/:acomment_id',a_comment.updateAnswerComment);
  app.delete('/acomments/:acomment_id',a_comment.delAnswerComment);

}