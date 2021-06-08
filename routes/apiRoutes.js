const db = require("../db/db")
const fs = require("fs");
const util = require("util");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        let lastId = db[db.length - 1]["id"];
        let newId = lastId + 1;
        newNote["id"] = newId;
        db.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(db));
        res.json(newNote);
    });
    app.delete("/api/notes/:id", function (req, res) {
        let selected = parseInt(req.params.id);

        for (let i = 0; i < db.length; i++) {
            if (selected === db[i].id) {
                db.splice(i, 1);
                fs.writeFile("./db/db.json", JSON.stringify(db, null, 2));
            }
        }
        res.json(db);
    });
};