var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema ({
    name: { type: String },
    number: { type: Number, unique: true }
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema);