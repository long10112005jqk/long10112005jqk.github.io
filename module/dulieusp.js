var mongoose = require('mongoose');
var sanpham = new mongoose.Schema({ 
	"id": 'number', 
	"kieu":'string',
    "giagiam":'string',
    "giamoi":'string',
    "phantram":'number',
    "gioitinh":'string',
    "img":'string'
},{collection:'motsp'});
module.exports = mongoose.model('sanpham', sanpham);