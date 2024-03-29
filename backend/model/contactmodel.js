const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
     fullname: {
        type: String,
        required: true
     },

     email: {
        type: String,
        required: true,
        unique: true
        
       
     },

     message: {
        type: String,
        required: true
     }
},{timestamps: true
}
)

module.exports = mongoose.model('Contacts', contactSchema)