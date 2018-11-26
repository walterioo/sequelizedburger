const express = require("express"),
    apiRoutes = require("./controllers/apiroutes"),
    path = require("path"),
    exphbs = require("express-handlebars");

const app = express(),
    PORT = process.env.PORT || 3000;

app
    .engine("handlebars", exphbs({defaultLayout: "main"}))
    .set("view engine", "handlebars");

app
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .use(express.static(path.join(__dirname, 'public')))
    .use("/", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`);
});

