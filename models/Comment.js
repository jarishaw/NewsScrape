var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// create a new CommentSchema object
var CommentSchema = new Schema({

    comment: {
        type: String
    }
});

// creates model from Schema
var Comment = mongoose.model("Comment", CommentSchema);

// export comment model
module.exports = Comment;