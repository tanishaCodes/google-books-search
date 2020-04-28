const mongoose   = require("mongoose");
const Schema     = mongoose.Schema;

const bookSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  synopsis: {
    type: String,
    required: true
  },
  coverImage: { 
    type: String, 
    required: true 
  }
  Link: { 
    URL: String, 
    required: Boolean 
  }

});

const Book     = mongoose.model("Book", bookSchema);

module.exports = Book;
