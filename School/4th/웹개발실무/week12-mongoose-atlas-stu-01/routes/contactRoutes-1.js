// ./routes/constactRoutes.js
const express = require("express");
const router = express.Router();

router
  .route("/contacts")
  .get((req, res) => {
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    res.status(201).send("Create Contacts");
  });

router
  .route("/contacts/:id")
  .get((req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  });

module.exports = router;
