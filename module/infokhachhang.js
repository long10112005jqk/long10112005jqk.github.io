var mongoose = require('mongoose');
var info = new mongoose.Schema({
    "mangid":'array',
	"ten":'string',
    "email":'string',
    "sdt":'string',
    "adress":'string',
    "note":'string'
},{collection:'infokhachhang'})
module.exports = mongoose.model('info',info);