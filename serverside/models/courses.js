const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const courseSchema = new mongoose.Schema({
    CourseName:  { type: String, required: true},
    InstructorName:  { type: String, required: true},
    InstructorEmail:  { type: String, required: true},
    InstructorPhone:  { type: String, required: true},
    CourseDuration:  { type: String, required: true},
    CourseDescription:  { type: String, required: true},
    CourseOutcome:  { type: String, required: true},
    CoursePreRequisites:  { type: String, required: true},

});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('courses', courseSchema,'courses');
