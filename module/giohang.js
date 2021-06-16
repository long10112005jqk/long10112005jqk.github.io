var mongoose = require('mongoose');
var giohang = new mongoose.Schema({ 
	"id": 'number', 
	"kieu":'string',
    "giagiam":'string',
    "giamoi":'string',
    "phantram":'number',
    "gioitinh":'string',
    "img":'string'
},{collection:'giohang'});
module.exports = mongoose.model('giohang', giohang);