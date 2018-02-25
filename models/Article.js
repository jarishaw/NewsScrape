var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// create a new ArticleSchema object
var ArticleSchema = new Schema({
    headline:{
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// creates model from the schema
var Article = mongoose.model("Article", ArticleSchema);

// export the Artcile Model
module.exports = Article;

