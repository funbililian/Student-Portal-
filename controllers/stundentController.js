const Student = require("../models/Student");

// CREATE STUDENT
const createStudent = async (req, res) => {
  try {
      const { name, regNo, email } = req.body;

          if (!name || !regNo || !email) {
                return res.status(400).json({
                        message: "Name, registration number and email are required"
                              });
                                  }

                                      const student = await Student.create({
                                            name,
                                                  regNo,
                                                        email
                                                            });

                                                                res.status(201).json({
                                                                      message: "Student account created successfully",
                                                                            student
                                                                                });
                                                                                  } catch (error) {
                                                                                      res.status(500).json({
                                                                                            message: "Failed to create student",
                                                                                                  error: error.message
                                                                                                      });
                                                                                                        }
                                                                                                        };


                                                                                                        // GET STUDENT
                                                                                                        const getStudent = async (req, res) => {
                                                                                                          try {
                                                                                                              const student = await Student.findById(req.params.id);

                                                                                                                  if (!student) {
                                                                                                                        return res.status(404).json({
                                                                                                                                message: "Student not found"
                                                                                                                                      });
                                                                                                                                          }

                                                                                                                                              res.json(student);
                                                                                                                                                } catch (error) {
                                                                                                                                                    res.status(400).json({
                                                                                                                                                          message: "Invalid student ID"
                                                                                                                                                              });
                                                                                                                                                                }
                                                                                                                                                                };


                                                                                                                                                                // UPDATE STUDENT NAME ONLY
                                                                                                                                                                const updateStudent = async (req, res) => {
                                                                                                                                                                  try {
                                                                                                                                                                      const { name, regNo, email } = req.body;

                                                                                                                                                                          if (regNo !== undefined || email !== undefined) {
                                                                                                                                                                                return res.status(400).json({
                                                                                                                                                                                        message: "Only the student's name can be updated"
                                                                                                                                                                                              });
                                                                                                                                                                                                  }

                                                                                                                                                                                                      if (!name) {
                                                                                                                                                                                                            return res.status(400).json({
                                                                                                                                                                                                                    message: "Name is required"
                                                                                                                                                                                                                          });
                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                  const student = await Student.findByIdAndUpdate(
                                                                                                                                                                                                                                        req.params.id,
                                                                                                                                                                                                                                              { name },
                                                                                                                                                                                                                                                    { new: true, runValidators: true }
                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                            if (!student) {
                                                                                                                                                                                                                                                                  return res.status(404).json({
                                                                                                                                                                                                                                                                          message: "Student not found"
                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                        res.json({
                                                                                                                                                                                                                                                                                              message: "Student profile updated successfully",
                                                                                                                                                                                                                                                                                                    student
                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                          } catch (error) {
                                                                                                                                                                                                                                                                                                              res.status(400).json({
                                                                                                                                                                                                                                                                                                                    message: "Invalid student ID"
                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                          };


                                                                                                                                                                                                                                                                                                                          // DELETE STUDENT
                                                                                                                                                                                                                                                                                                                          const deleteStudent = async (req, res) => {
                                                                                                                                                                                                                                                                                                                            try {
                                                                                                                                                                                                                                                                                                                                const student = await Student.findByIdAndDelete(req.params.id);

                                                                                                                                                                                                                                                                                                                                    if (!student) {
                                                                                                                                                                                                                                                                                                                                          return res.status(404).json({
                                                                                                                                                                                                                                                                                                                                                  message: "Student not found"
                                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                res.json({
                                                                                                                                                                                                                                                                                                                                                                      message: "Student account deleted successfully"
                                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                            } catch (error) {
                                                                                                                                                                                                                                                                                                                                                                                res.status(400).json({
                                                                                                                                                                                                                                                                                                                                                                                      message: "Invalid student ID"
                                                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                            };


                                                                                                                                                                                                                                                                                                                                                                                            module.exports = {
                                                                                                                                                                                                                                                                                                                                                                                              createStudent,
                                                                                                                                                                                                                                                                                                                                                                                                getStudent,
                                                                                                                                                                                                                                                                                                                                                                                                  updateStudent,
                                                                                                                                                                                                                                                                                                                                                                                                    deleteStudent
                                                                                                                                                                                                                                                                                                                                                                                                    };