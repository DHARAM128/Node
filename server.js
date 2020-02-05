// // // load third party module nodemailer
// // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// // const nodemailer = require("nodemailer");

// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: "dpawar128@gmail.com",
// //     pass: ""
// //   }
// // });

// // const mailOption = {
// //   to: "alpanasharma789@gmail.com ",
// //   from: "dpawar128@gmail.com",
// //   subject: "we are sending test email by using nodejs nodeemail",
// //   html: `<h1 style="color:green>Happy Birthday dear...😅</h1>
// //     <p style="padding:10px; background:#eee; color:red">Again wish a happy Birthday </p>`
// // };

// // transporter.sendMail(mailOption, (err, info) => {
// //   if (err) throw err;
// //   else {
// //     console.log("mail has been sent....😆");
// //   }
// // });

// // let stuff = require("./");
// // console.log(stuff.users("dharmendra"));

// // console.log(stuff.fullstackstudents("dharmendra", 35, "70%"));

// //load mongodb Driver Module connecting database

// const mongodb = require("mongodb").MongoClient;
// const CloudMongoDb =
//   "mongodb+srv://dpawar128:dharmendra@123@cluster0-lw1kj.mongodb.net/test?retryWrites=true&w=majority";

// mongodb.connect(CloudMongoDb, { useUnifiedTopology: true }, (err, db) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const database = db.db("fullstackdatabase");
//     const users = [
//       {
//         name: "dkd",
//         company: "info",
//         salary: 20000,
//         des: "angular developer",
//         doj: new Date("2/12/2018")
//       },
//       {
//         name: "Dharm",
//         company: "infoname",
//         salary: 30000,

//         des: "angular developer",
//         doj: new Date("2/10/2018")
//       },
//       {
//         name: "Dharmendra",
//         company: "infofile",
//         salary: 50000,
//         des: "angular developer",
//         doj: new Date("2/08/2018")
//       }
//     ];
//     //insert data here and create colleation
//     database.collection("fullstack").findOne(users);

//     //   .insertMany(users)
//     //   .then(user => {
//     //     console.log(user);
//     //   })
//     //   .catch(err => {
//     //     console.log(err);
//     //   });
//     console.log("database connected");
//   }
// });

// // findOne(user=>{
// //     console.log(user)
// // })     and remove then and catch

//OS is a core Module.........................

// const os = require("os");
// // console.log(os.arch());
console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.platform());
// console.log(os.userInfo());
// console.log(os.release());
// console.log(os.networkInterfaces());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.uptime());

//fs is a core module it is a file system module.................

// const buffer = Buffer.from("dkd");
// console.log(buffer);

// const fs = require("fs");

// const readmeText = fs.readFileSync("./readme.txt", "utf8");
// this is printing raw data if you want to convert buffer into text then use UTF8

// const writemeText = fs.writeFileSync("./writemeText.txt", readmeText);
// console.log(writemeText);
// console.log(readmeText);

// const fs = require("fs");
// fs.readFile("./readme.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   fs.writeFile("./writmeText.txt", data, err => {
//     if (err) throw err;
//     console.log(data);
//   });
// });

// const fs = require("fs");
// fs.mkdir("jspider", err => {
//   if (err) throw err;
//   fs.readFile("./readme.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     fs.writeFile("./jspider/jspider.txt", data, err => {
//       if (err) throw err;
//       console.log(data);
//     });
//   });
// });

// const fs = require("fs");
// fs.unlink("./writmeText.txt", err => {
//   if (err) throw err;
//   console.log("successfully deleted writmeText.txt");
// });
// fs.unlink("./jspider/jspider.txt", err => {
//   if (err) throw err;
//   console.log("successfully deleted jspider.txt and now we r deleting folder");
//   fs.rmdir("./jspider", err => {
//     if (err) throw err;
//     console.log("finally deleted folder also.....");
//   });
// });

// Buffer and Streams...............
// const fs = require("fs");

// // console.log(__dirname);
// // conaole.log(__filename);

// const readStream = fs.createReadStream(__dirname + "/readme.txt", "utf8"); //readStream
// const writeStream = fs.createWriteStream(__dirname + "/writeMe.txt"); //writeStream
// //next execute an event with help of 'on ' method
// // readStream.on("data", chunk => {
// //   writeStream.write(chunk, err => {
// //     if (err) throw err;
// //     console.log(chunk);
// //   });
// // });

// // Using for dublicate perpose
// readStream.pipe(writeStream);

// const http = require("http"); //server
// const fs = require("fs"); //file system

// const server = http.createServer((req, res) => {
//   const readHtml = fs.createReadStream(__dirname + "/index.html", "utf8");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   readHtml.pipe(res);
// });
// const port = process.env.port || 2000;
// server.listen(port, err => {
//   if (err) throw err;
//   console.log(`server is running on ${port}`);
// });

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     if (req.url === "/" || req.url === "/home") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
//     } else if (req.url === "/login") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       fs.createReadStream(__dirname + "/login.html", "utf8").pipe(res);
//     } else if (req.url === "/api") {
//       req.writeHead(200, { Content: "application/json" });
//       const users = [
//         { name: "dkd", company: "info", age: 27, salary: 25000 },
//         { name: "dharem", company: "infbeamo", age: 24, salary: 25000 },
//         { name: "deshmukh", company: "lti", age: 27, salary: 25050 },
//         { name: "dharmendra", company: "lnt", age: 17, salary: 2500020 },
//         { name: "dharm", company: "infosystem", age: 27, salary: 25000 }
//       ];
//       req.end(JSON.stringify(users));
//     } else if (req.url === "/register") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       fs.createReadStream(__dirname + "/register.html", "utf8").pipe(res);
//     } else if (res.url === "/contect.html") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       {
//         fs.createReadStream(__dirname + "contect.html", "utf8").pipe(res);
//       }
//     } else {
//       res.writeHead(200, { "Context-Type": "text/html" });
//       fs.createReadStream(__dirname + "/pagenotfound.html", "utf8").pipe(res);
//     }
//   })
//   .listen(2000, err => {
//     if (err) throw err;
//     console.log("aerver is running on port number 2000");
//   });

///SDHSDKFBNSLKFI;ODGHIESRGJERSIGHESRIOYGTESRIGJLERNGKLERSGHITGJERSLIGM////./...........

const event = require("events");
const util = require("util");

const Person = function(name) {
  this.name = name;
};

util.inherits(person, event.EventEmitter);
const Dkd = new Person("Dkd");
const dharem = new Person("dharem");
const dharmendra = new Person("dharmendra");
const People = [Dkd, dharem, dharmendra];

People.forEach(person => {
  person.on("speak", message => {
    console.log(`${person.name} said ${message}`);
  });
});
Dkd.emit("hello dharmendra", " how are you");
