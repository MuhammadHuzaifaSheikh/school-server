const mongoose = require('mongoose')

var UsersSchema= new mongoose.Schema({
    cnic: {type: String},
    phone: {type: String},
    dateOfBirth: {type: Number,required:true},
    currentClass: {type: String, required: true},
    lastInstitution: {type: String ,required:true},
    name: {type: String, required: true},
    year: {type: Number, required: true},
    address: {type: String, required: true},
    fatherName: {type: String, required: true},
    admissionDate: {type: Number, required: true},
    admittedInClass: {type: String, required: true},
    photoURL: {type: String},
    createdAt:{type:Number,default:Date.now},
})
exports.UserModel = mongoose.model('users',UsersSchema);


