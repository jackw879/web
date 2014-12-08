Brief guide

In our application of web architecture, we develop web pages that allow to create, update, get, delete a new question. And we can also do these methods to answer or comment of a question.

User can run the application in browser to achieve these function through our GUI, they can also test the functions by running CURL commands.



Run the application
The testing server system is Ubuntu Server LTS 14.04.1,which have installed Node and SQLite

1. npm install
Open the folder where the application is in the terminal, and install required modules by command "npm install"

2. initialize the database
If you want work with current database, you can skip this step, otherwise, you can initialize the database by using command “node create”in terminal.

3.npm start
start the server of the application. use command "npm start" to start the server

4.run the application in browser
Open the browser and type "http://localhost:3000" in the address bar in browser, there will show the index page of the application, and users can use functions in the web.


Test the application 
Using curl command
After running server of the application by "npm start" command in terminal, open another terminal and test the application by follow commands of curl

Testing head

curl --HEAD localhost:3000/questions

Users can also test the head of the http head when implementing other methods like follow command

curl -i http://localhost:3000/questions


testing HTTP verbs

(the question which id is 2 is already existed in the database)

test GET method:
curl http://localhost:3000/questions

test post method:
curl -d “title=new question&contents=new question contents?” http://localhost:3000/questions

test put method:
curl -X PUT -d "title=modify question&contents=changed question" http://localhost:3000/questions/2

test delete method:
curl -X DELETE http://localhost:3000/questions/2


users can test 4 HTTP verbs of answers and comments by routers in API



API

question part:
GET method
http://localhost:3000/questions
http://localhost:3000/questions/:question_id
POST method
http://localhost:3000/questions
PUT method
http://localhost:3000/questions/:question_id
DELETE method
http://localhost:3000/questions/:question_id


answer part:
GET method
http://localhost:3000/questions/:questin_id/answers
http://localhost:3000/questions/:question_id/answers/:answer_id
POST method
http://localhost:3000/questions/:question_id/answers
PUT method
http://localhost:3000/answers/:answer_id
DELETE method
http://localhost:3000/answers/:answer_id


question comment part:
GET method
http://localhost:3000/questions/:questin_id/qcomments
http://localhost:3000/questions/:question_id/qcomments/:qcomment_id
POST method
http://localhost:3000/questions/:question_id/qcomments
PUT method
http://localhost:3000/qcomments/:qcomment_id
DELETE method
http://localhost:3000/qcomments/:qcomment_id

answer comment part:
GET method
http://localhost:3000/answers/:answer_id/acomments
http://localhost:3000/answers/:answer_id/acomments/:acomment_id
POST method
http://localhost:3000/answers/:answer_id/acomments
PUT method
http://localhost:3000/acomments/:acomment_id
DELETE method
http://localhost:3000/acomments/:acomment_id

besides users can use routers in the follow to get specifical page in browser:
http://localhost:3000/                                                 show the index page
http://localhost:3000/about                                            show the about page
http://localhost:3000/askQuestion                                      show the page of asking question
http://localhost:3000/questions/:question_id/questionEdit              show page of editing question
http://localhost:3000/questions/:question_id/questionComment           show page of adding question comment
http://localhost:3000/questions/:question_id/qcommentEdit              show page of editing question comment
http://localhost:3000/answers/:answer_id/answerEdit                    show page of editing answer
http://localhost:3000/answers/:answer_id/answerCommen                  show page of adding answer comment
http://localhost:3000/acomments/:acomment_id/acommentEdit              show page of edting answer comment
http://localhost:3000/questions/:question_id                           show page of specific question and user can add answer to this question
