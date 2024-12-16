const express = require("express");
const { getRecords, createRecord, updateRecord, deleteRecord } = require("../controllers/recordController");
const router = express.Router();

// CRUD Endpoints
router.get("/", getRecords);
router.post("/", createRecord);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
