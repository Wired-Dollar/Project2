// *********************************************************************************
// event-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the events
  app.get("/api/events", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Events.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // POST route for saving a new events
  app.post("/api/events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // DELETE route for deleting events
  app.delete("/api/events/:id", function(req, res) {
    db.Events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });
};
