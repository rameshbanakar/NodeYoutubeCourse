const express = require("express");
const data = require("./movies.json");

const app = express();
app.use(express.json())
app.get("/api/movies/", (req, res) => {
  res.json(data);
});

app.get("/api/movies/:id/:name?", (req, res) => {
  let id=parseInt(req.params.id)
  console.log(id)
  let movie=data.find(el=>el.id===id)
  if(!movie){
    res.status(404).send("data not found")
  }
  console.log(movie)
  res.json(movie);
});


app.post("/api/movies/", (req, res) => {
  console.log(req.body);
  const newId=data[data.length-1].id+1
  const newObj=Object.assign({id:newId},req.body)
  console.log(newObj)
  data.push(newObj)
  res.send("created")
});
app.listen(8000, () => {
  console.log("server started@8000");
  
});
