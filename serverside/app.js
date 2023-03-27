const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//specify where to find the schema
const course = require('./models/courses');
const courses = require('./models/courses');
//connect and display the status 
mongoose.connect('mongodb://localhost:27017/DigiBoard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("connected"); })
  .catch(() => { console.log("error connecting"); });

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//in the app.get() method below we add a path for the courses API 
//by adding /courses, we tell the server that this method will be called every time http://localhost:8000/courses is requested. 
app.get('/courses', (req, res, next) => {
  //call mongoose method find (MongoDB db.courses.find())
  courses.find()
    //if data is returned, send data as a response 
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
    });
});

//serve incoming post requests to /courses
app.post('/courses', (req, res, next) => {
// create a new courses variable and save request’s fields 
const course = new courses({

  CourseName:  req.body.CourseName,
  InstructorName:  req.body.InstructorName,
  InstructorEmail:  req.body.InstructorEmail,
  InstructorPhone:  req.body.InstructorPhone,
  CourseDuration:  req.body.CourseDuration,
  CourseDescription:  req.body.CourseDescription,
  CourseOutcome:  req.body.CourseOutcome,
  CoursePreRequisites:  req.body.CoursePreRequisites,
});
//send the document to the database 
course.save()
  //in case of success
  .then(() => { console.log('Success');})
  //if error
  .catch(err => {console.log('Error:' + err);});
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/courses/:id", (req, res, next) => {
  course.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json("Deleted!");
  });
});

//serve incoming put requests to /courses 
app.put('/courses/:id', (req, res, next) => { 
  console.log("id: " + req.params.id) 
  // check that the parameter id is valid 
  if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
      course.findOneAndUpdate( 
          {_id: req.params.id}, 
          {$set:{ 
            CourseName:  req.body.CourseName,
            InstructorName:  req.body.InstructorName,
            InstructorEmail:  req.body.InstructorEmail,
            InstructorPhone:  req.body.InstructorPhone,
            CourseDuration:  req.body.CourseDuration,
            CourseDescription:  req.body.CourseDescription,
            CourseOutcome:  req.body.CourseOutcome,
            CoursePreRequisites:  req.body.CoursePreRequisites,
          }}, 
          {new:true} 
      ) 
      .then((course) => { 
          if (course) { //what was updated 
              console.log(course); 
          } else { 
              console.log("no data exist for this id"); 
          } 
      }) 
      .catch((err) => { 
          console.log(err); 
      }); 
  } else { 
      console.log("please provide correct id"); 
  } 
});

//find a student based on the id
app.get('/courses/:id', (req, res, next) => {
  //call mongoose method findOne (MongoDB db.courses.findOne())
  course.findOne({_id: req.params.id}) 
      //if data is returned, send data as a response 
      .then(data => {
          res.status(200).json(data)
          console.log(data);
      })
      //if error, send internal server error
      .catch(err => {
      console.log('Error: ${err}');
      res.status(500).json(err);
  });
});

//to use this middleware in other parts of the application
module.exports = app;
