require('dotenv').config()

const express   = require('express')
const app       = express()
const path      = require('path')
const mongoose  = require('mongoose')
const apiRoutes = require("./routes/apiRoutes");

const PORT      = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API routes here (if you were to have some routes here)
app.use("/api", apiRoutes);

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks',
	{ useNewUrlParser: true }
)

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
