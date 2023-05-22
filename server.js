const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://loacalhost:8081",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const { DB_URL } = require("./app/config/db.config");
const dbConfig = require("./app/config/db.config");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database...");
  })
  .catch((err) => {
    console.log("Cannot connect to the database...", err);
    process.exit();
  });

//route
app.get("/", (req, res) => {
  res.json({ message: " Welcome to tutorials application" });
});

require("./app/routes/tutorial.routes")(app);

//port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "viewer",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'viewer' to roles collection");
      });

      new Role({
        name: "editor",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'editor' to roles collection");
      });

      new Role({
        name: "creator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'creator' to roles collection");
      });
    }
  });
}
