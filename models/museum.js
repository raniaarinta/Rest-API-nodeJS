const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const museumSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    }, 
    city: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    }
});
const Museum = mongoose.model('museum', museumSchema);
module.exports =Museum;