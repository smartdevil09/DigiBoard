const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const profileSchema = new mongoose.Schema({
    FirstName:  { type: String, required: true},
    LastName:  { type: String, required: true},
    DateOfBirth:  { type: String, required: true},
    ContactNumber:   { type: String, required: true},
    Email:   { type: String, required: true},
    University:   { type: String, required: true},
    HighestDegree:   { type: String, required: true},
    Major:   { type: String, required: true},
    Skills:   { type: String, required: true},
    SelfIntroduction:   { type: String, required: true}
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Student', profileSchema,'Students');
//note capital S in the collection name
                    