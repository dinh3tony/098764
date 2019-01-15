var Cake = require('../models/cake.js');
var Comment = require('../models/comment.js');
module.exports = {
  index: function(req, res){
    Cake.find({}, function(err, data){
      if(err) {
        res.json({msg:"Couldn't find properly", data:data})
      } else {
        res.json({msg:"Found", data:data})
      }
    })
  },
  addNew: function(req,res){
    var cake = new Cake({
      name:req.body.name,
      url:req.body.url,
      comment:[],
      rating:[],
      created_at:new Date(),
      updated_at:new Date()
    });
    cake.save(function(err, data){
      if(err){
        res.json({msg:"Could not save", data:data})
      } else {
        res.json({msg:"Successfully Created", data:data})
      }
    })
  },
  addComment: function(req,res){
    var comment = new Comment({
      content:req.body.content,
      created_at: new Date(),
      updated_at: new Date()
    });
    comment.save(function(err, data){
      if(err){
        res.json({msg:"Could not save", data:data})
      } else {
        Cake.updateOne({_id:req.params.id},{$push:{comment:data}, {rating:req.body.rating}},
          function(err, data2){
            if(err){
              res.json({msg:"Could not update", data:data2})
            } else {
              res.json({msg:"Updated", data:data2})
            }
          }
        )
      }
    })
  },
  destroyCake: function(req,res){
    Cake.deleteOne({_id:req.params.id}, function(err, data){
      if(err){
        res.json({msg:"Could not delete", data:data})
      } else {
        res.json({msg:"success",data:data});
      }
    })
  },
  show: function(req,res){
    Cake.find({_id:req.params.id}, function(err, data){
      if(err){
        res.json({msg:"Could not find",data:data});
      } else {
        res.json({msg:"success",data:data});
      }
    })
  }
};
