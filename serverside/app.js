const express = require('express');
const app = express();
//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

//in the app.get() method below we add a path for the students API 
//by adding /students, we tell the server that this method will be called every time http://localhost:8000/courses is requested. 
app.get('/courses', (req, res, next) => {
    //we will add an array named students to pretend that we received this data from the database
   /* const courses = [ 
    { "id" : "1", "firstName" : "John" , "lastName" : "Dow" }, 
    { "id" : "2", "firstName" : "Ann" , "lastName" : "Smith" }, 
    { "id" : "3", "firstName" : "Joan" , "lastName" : "Doe" }]; */
    const courses  = [ { "CourseName" : "IT Service Delivery" , "InstructorName" : "Dr. Maria", "InstructorEmail" : "shdv@sdhjb.com", "InstructorPhone" : "236537223","CourseDuration" : "6 months", "CourseDescription" : "test description", "CourseOutcome" : "Lifecyle of ITIL", "CoursePreRequisites" : "ITIL" }, 
  {  "CourseName" : "IT Info Sec admin" , "InstructorName" : "Dr. Yang", "InstructorEmail" : "sd@dfh.com", "InstructorPhone" : "8374373478","CourseDuration" : "6 months", "CourseDescription" : "testg djbs", "CourseOutcome" : "Intro to info sec", "CoursePreRequisites" : "Network" }
  ];

    //send the array as the response 
    res.json(courses);

});

//to use this middleware in other parts of the application
module.exports=app;
                    