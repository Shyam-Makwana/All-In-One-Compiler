const express = require("express");
// const { f } = require("joi");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
var fs = require("fs");
const fsPromises = require("fs").promises;
const { exec } = require("child_process");
require("dotenv").config();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/" + "index.html");
});

app.get("/compiler", function (req, res) {
  res.sendFile(__dirname + "/public/" + "compiler.html");
});

app.get("/firstandfollow", function (req, res) {
  res.sendFile(__dirname + "/public/" + "fnf.html");
});

app.get("/leftfactoring", function (req, res) {
  res.sendFile(__dirname + "/public/" + "lf.html");
});

app.get("/leftrecursion", function (req, res) {
  res.sendFile(__dirname + "/public/" + "lr.html");
});

app.get("/token", function (req, res) {
  res.sendFile(__dirname + "/public/" + "token.html");
});

app.get("/ascii", function (req, res) {
  res.sendFile(__dirname + "/public/" + "ascii.html");
});

app.post("/api/compiler", async function (req, res) {
  // console.log("Starting......");
  var input = req.body.input;
  // console.log(input);
  input = input.concat("\n");
  fsPromises.writeFile("in.txt", input, function (err) {
    if (err) throw err;
    console.log("error to save " + filename);
  });
  // var command = "/a.out < in.txt";
  var command = "chmod 777 ./a.out && ./a.out < in.txt";
  var x = {};
  await exec(command, (error, stdout, stderr) => {
    console.log( "From the execute function");
    x = stdout;
    console.log(stdout);
    console.log('StdError = ',stderr);
    console.log('Error = ',error);
    res.send(x);
    // console.log(r);
  });
  // res.send(x);
});

app.post("/api/fnf", async function (req, res) {
  // console.log("Starting......");
  var input = req.body.input;
  // console.log(input);
  input = input.concat("\n");
  fsPromises.writeFile("in.txt", input, function (err) {
    if (err) throw err;
    console.log("error to save " + filename);
  });
  // var command = "/a.out < in.txt";
  // var command = "chmod 777 ./a.out && ./a.out < in.txt";
  var command = "python ./compiler/firstandfollow.py < in.txt";
  var x = {};
  await exec(command, (error, stdout, stderr) => {
    // console.log( "From the execute function");
    x = stdout;
    // console.log(stdout);
    // console.log('StdError = ',stderr);
    // console.log('Error = ',error);
    res.send(x);
    // console.log(r);
  });
  // res.send(x);
});

app.post("/api/lf", async function (req, res) {
  // console.log("Starting......");
  var input = req.body.input;
  // console.log(input);
  input = input.concat("\n");
  fsPromises.writeFile("in.txt", input, function (err) {
    if (err) throw err;
    console.log("error to save " + filename);
  });
  // var command = "/a.out < in.txt";
  // var command = "chmod 777 ./a.out && ./a.out < in.txt";
  var command = "python ./compiler/LeftFactoring.py < in.txt";
  var x = {};
  await exec(command, (error, stdout, stderr) => {
    // console.log( "From the execute function");
    x = stdout;
    // console.log(stdout);
    // console.log('StdError = ',stderr);
    // console.log('Error = ',error);
    res.send(x);
    // console.log(r);
  });
  // res.send(x);
});

app.post("/api/lr", async function (req, res) {
  // console.log("Starting......");
  var input = req.body.input;
  // console.log(input);
  input = input.concat("\n");
  fsPromises.writeFile("in.txt", input, function (err) {
    if (err) throw err;
    console.log("error to save " + filename);
  });
  // var command = "/a.out < in.txt";
  // var command = "chmod 777 ./a.out && ./a.out < in.txt";
  var command = "python ./compiler/LeftRecursion.py < in.txt";
  var x = {};
  await exec(command, (error, stdout, stderr) => {
    // console.log( "From the execute function");
    x = stdout;
    // console.log(stdout);
    // console.log('StdError = ',stderr);
    // console.log('Error = ',error);
    res.send(x);
    // console.log(r);
  });
  // res.send(x);
});

app.post("/api/token", async function (req, res) {
  // console.log("Starting......");
  var input = req.body.input;
  // console.log(input);
  input = input.concat("\n");
  fsPromises.writeFile("in.txt", input, function (err) {
    if (err) throw err;
    console.log("error to save " + filename);
  });
  // var command = "/a.out < in.txt";
  var command = "chmod 777 ./token && ./token < in.txt";
  var x = {};
  await exec(command, (error, stdout, stderr) => {
    console.log( "From the execute function");
    x = stdout;
    console.log(stdout);
    console.log('StdError = ',stderr);
    console.log('Error = ',error);
    res.send(x);
    // console.log(r);
  });
  // res.send(x);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
