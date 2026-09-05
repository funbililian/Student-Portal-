const express = require("express");

const router = express.Router();

const {
  createStudent,
    getStudent,
      updateStudent,
        deleteStudent
        } = require("../controllers/studentController");

        // Create student
        router.post("/", createStudent);

        // Get student
        router.get("/:id", getStudent);

        // Update student
        router.patch("/:id", updateStudent);

        // Delete student
        router.delete("/:id", deleteStudent);

        module.exports = router;