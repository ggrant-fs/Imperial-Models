const mongoose = require('mongoose');

const blogPostSchema  = new mongoose.Schema({
     image:{
        type:String,
        unique:true,
        required:[true,'Every blog post must have a string']
     },

      catagory:{
         type:String,
         unique:true,
         required:[true,'Every blog must have a catagory']
      },

      caption:{
        type:String,
        unique:true,
        required:[true,'Every blog must have a caption']
      },

      author:{
        type:String,
        required:[true,'Every blog mush have an author']
      },
     
},{timestamp:true});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;