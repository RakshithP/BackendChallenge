const http = require("http");
const express = require("express");
var app = express();


app.get("/process",(req, res) => {
	console.log('process get');
	res.send("process get");
})

app.post("/process",(req, res) => {
	console.log('process post');
	res.send("process post");
})

app.put("/process",(req, res) => {
	console.log('process put');
	res.send("process put");
})

app.delete("/process",(req, res) => {
	console.log('process delete');
	res.send("process delete");
})

app.get("/stats",(req, res) => {
	console.log("stats");
	res.send("stats");
})

app.listen(3000);