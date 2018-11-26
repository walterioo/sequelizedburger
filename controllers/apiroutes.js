const express = require("express"),
    router = express.Router(),
    burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.getAll((data) => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        
        res.render("index", hbsObject);
    });   
});

router.get("/api", (req, res) => {
    burger.getAll((data) => {
        res.json(data);
    });
});

router.post("/api/post", (req, res) => {
    let value = req.body.burger;
    console.log(value);
    
    burger.create(value, (data) => {
        res.json(data);
    });
});

router.put("/api/burger/:id", (req, res) => {
    let id = req.params.id;
    burger.update(id, (data) => {
        if (data.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
    });
});


module.exports = router;