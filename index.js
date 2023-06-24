const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");

// routes
const homeRoutes = require("./routes/home");
const notebooksRoutes = require("./routes/notebooks");
const addRoutes = require("./routes/add");
const cardRoutes = require("./routes/card");


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: "hbs",
});

app.engine('hbs', hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

//use
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));  //form dan nimadir yuborsak manashu narsani true qib qoyishimiza kere. //default qiymati false bob turadi. Bu orqali input ni ichidan olib bilamiza.
app.use("/", homeRoutes);
app.use("/notebooks",notebooksRoutes);
app.use("/add", addRoutes);
app.use("/card", cardRoutes);
//get






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
})