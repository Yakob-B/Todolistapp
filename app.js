const bodyParser = require("body-parser");
const express = require("express");
const gateDate = require("./Views/date");
const date = require("./Views/date");

const app = express();

var items = ["read the bible", "eat breakfast", "class"];
var workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.post("/", function(req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/", function(req, res) {
  let day = date.gateDay();

    res.render("list", { ListTitle: day, newItem: items });
});

app.get("/work", function(req, res) {
    res.render("list", { ListTitle: "Work", newItem: workItems });
});

app.get("/about",function(req,res){
    res.render("about");
    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Server started at port 3000 Or"+ PORT);
});
