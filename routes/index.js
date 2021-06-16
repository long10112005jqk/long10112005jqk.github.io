var express = require('express');
var router = express.Router();
var multer  = require('multer')
var sanphamMongoose = require('../module/dulieusp.js');
var giohangMongoose = require('../module/giohang.js');
var infoMongoose = require('../module/infokhachhang.js');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './img')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})
 
var upload = multer({ storage: storage })
var img;

/* GET home page. */

router.get('/dangsp', function(req, res, next) {
  res.render('dangsp', { title: 'Express' });
});
router.get('/trang-chu/allsp', function(req, res, next) {
  sanphamMongoose.find({},function(err,dulieu) {
    res.render('allsp',{data:dulieu});
  })
});
router.post('/upload',upload.any(),function(req, res, next) {
  img = req.files[0].filename;
  res.status(200).send(req.files); 
});
router.get('/thanhcong', function(req, res, next) {
  res.render('thanhcong', { title: 'Express' });
});
router.post('/thanhcong', function(req, res, next) {
  var dulieusp = {
    "id":req.body.idsp,
    "kieu":req.body.kieusp,
    "giagiam":req.body.giagiam,
    "giamoi":req.body.giamoi,
    "phantram":req.body.phantram,
    "gioitinh":req.body.gioitinh,
    "img":img
  }
  sanphamMongoose.insertMany(dulieusp,function(err,dulieu){
    res.redirect('/dangsp');
  }) 
});
router.get('/trang-chu/hang-moi', function(req, res, next) {
  sanphamMongoose.find({},function(err,dulieu) {
    res.render('new',{data:dulieu});
  })
});
router.get('/trang-chu/hang-sale', function(req, res, next) {
  sanphamMongoose.find({},function(err,dulieu) {
    res.render('sale',{data:dulieu});
  })
});
router.get('/trang-chu/thoi-trang-nam', function(req, res, next) {
  sanphamMongoose.find({$or: [{gioitinh:'nam'},{gioitinh:'kxd'}]},function(err,dulieu) {
    res.render('man',{data:dulieu});
  })
});
router.get('/trang-chu/thoi-trang-nu', function(req, res, next) {
  sanphamMongoose.find({$or: [{gioitinh:'nu'},{gioitinh:'kxd'}]},function(err,dulieu) {
    res.render('woman',{data:dulieu});
  })
});
router.get('/', function(req, res, next) {
  sanphamMongoose.find({},function(err,dulieu) {
    res.render('index',{data:dulieu});
  })
});
router.get('/trang-chu/giohang', function(req, res, next) {
  giohangMongoose.find({},function(err,dulieu) {
        res.render('giohang',{data:dulieu});
  })
});
router.get('/trang-chu/giohang/:id', function(req, res, next) {
  var id = req.params.id;
  sanphamMongoose.find({_id:id},function(err,dulieu) {
    giohangMongoose.insertMany(dulieu,function(err,dulieu) {
      giohangMongoose.find({},function(err,dulieu) {
        res.render('giohang',{data:dulieu});
      })
    })
  })
});
router.get('/trang-chu/giohang/xoa/:idxoa', function(req, res, next) {
  var idxoa = req.params.idxoa;
  giohangMongoose.findByIdAndRemove({_id:idxoa},function(err,dulieu) {
    res.redirect('/trang-chu/giohang');
  }) 
});
router.get('/dkthanhcong', function(req, res, next) {
  giohangMongoose.find({},function(err,dulieu) {
    if (dulieu.length > 0) 
    {
      giohangMongoose.remove({},function(err,dulieu) {
      res.render('dkthanhcong');
      })
    }
    else 
    {
      res.redirect('/');
    }
  }) 
});
router.get('/trang-chu/formdk', function(req, res, next) {
  res.render('formdk', { title: 'Express' });
});
router.get('/infokhachhang', function(req, res, next) {
  infoMongoose.find({},function(err,dulieu) {
    res.render('infokhachhang',{data:dulieu});
  })
});
router.get('/infokhachhang/:id', function(req, res, next) {
  infoMongoose.findByIdAndRemove({_id:req.params.id},function(err,dulieu) {
    res.redirect('/infokhachhang');
  })
});
router.post('/trang-chu/formdk', function(req, res, next) {
  giohangMongoose.find({},function(err,dulieu) {
    var mangid = [];
    for (var i = dulieu.length - 1; i >= 0; i--) {
      mangid.push(dulieu[i].id);
    }
  var info = {
    "mangid":mangid,
    "ten":req.body.ten,
    "email":req.body.email,
    "sdt":req.body.sdt,
    "adress":req.body.adress,
    "note":req.body.note
  }
  infoMongoose.insertMany(info,function(err,dulieu) {
    res.redirect('/dkthanhcong')
  })
})
});
module.exports = router;
