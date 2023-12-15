const express = require("express");
const data = require("./movies.json");
const morgan = require("morgan");
const app = express();
const logger = function (req, res, next) {
  console.log("logger middleware called");
  next();
};
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});
app.use(express.json());
app.use(morgan());
app.use(logger);
app.get("/api/movies/", (req, res) => {
  res.json({ requestedAt: req.requestedAt, data: data });
});

app.get("/api/movies/:id/:name?", (req, res) => {
  let id = parseInt(req.params.id);
  console.log(id);
  let movie = data.find((el) => el.id === id);
  if (!movie) {
    res.status(404).send("data not found");
  }
  console.log(movie);
  res.json(movie);
});

app.post("/api/movies/", (req, res) => {
  console.log(req.body);
  const newId = data[data.length - 1].id + 1;
  const newObj = Object.assign({ id: newId }, req.body);
  console.log(newObj);
  data.push(newObj);
  res.send("created");
});
app.put("/api/movies/:id", (req, res) => {
  let id = req.params.id;

  movieToUpdate = data.find((el) => el.id === id * 1);
  if (!movieToUpdate) {
    res.status(404).send("there is no movies to update" + id);
  }
  let movieIndex = data.indexOf(movieToUpdate);
  updatedMovie = Object.assign(movieToUpdate, req.body);
  data[movieIndex] = updatedMovie;
  res.send(updatedMovie);
});
app.patch("/api/movies/:id", (req, res) => {
  let id = req.params.id;

  movieToUpdate = data.find((el) => el.id === id * 1);
  if (!movieToUpdate) {
    res.status(404).send("there is no movies to update" + id);
  }
  let movieIndex = data.indexOf(movieToUpdate);
  updatedMovie = Object.assign(movieToUpdate, req.body);
  data[movieIndex] = updatedMovie;
  res.send(updatedMovie);
});
app.delete("/api/movies/:id", (req, res) => {
  let id = req.params.id;
  movieToDelete = data.find((el) => el.id === id * 1);
  if (!movieToDelete) {
    res.status(404).send("there is no movies to update" + id);
  }
  data.splice(id, 1);
  res.send(movieToDelete);
});

app.listen(8000, () => {
  console.log("server started@8000");
});
