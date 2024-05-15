const connection = require('./db');

const add =(req, res) => {
    const { Regno, Name, Mark, native } = req.body;
    const details = { Regno, Name, Mark, native };
    const sql = "INSERT INTO student_details SET ?"; 
  
    connection.query(sql, details, (error, results) => {
      if (error) {
        console.error('Error adding record to database ');
        res.status(500).json({ status: false, message: "Failed to add record" });
      } else {
        console.log('Record added successfully');
        res.status(200).json({ status: true, message: "Record added successfully"});
      }
    });
  };
  
const show =(req, res) => {
      const sql = "SELECT * FROM student_details";
      connection.query(sql, function(error, results) {
          if (error) {
            console.error('Error to database ');
            res.status(500).json({ status: false, message: "Failed record" });
          } else {
            console.log('Record show successfully');
            res.status(200).json({ status: true, message: "Record show successfully", data:results });
          }
        });
  } ;
  
  const search= (req, res) => {
      var stuid = req.params.id;
      let sql = "SELECT * FROM student_details WHERE Regno ="+stuid;
      connection.query(sql, function(error, results) {
          if (error) {
            console.error('Error to database ');
            res.status(500).json({ status: false, message: "Failed record" });
          } else {
            console.log('Record showed');
            res.status(200).json({ status: true, message: "Record showed", data:results });
          }
        });
  } ;
  
 const update = (req, res) => {
      const id = req.params.id;
      const { Name, Mark, native } = req.body; 
      const sql = "UPDATE student_details SET Name = ?, Mark = ?, native = ? WHERE Regno = ?";
      connection.query(sql, [Name, Mark, native, id], (error, results) => {
          if (error) {
              console.error('Error updating record:', error);
              res.status(500).json({ status: false, message: "Failed to update record" });
          } else {
              if (results.affectedRows > 0) {
                  console.log('Record updated successfully');
                  res.status(200).json({ status: true, message: "Record updated successfully" });
              } else {
                  console.log('Record not found');
                  res.status(404).json({ status: false, message: "Record not found"});
              }
          }
      });
  };
  const del = (req, res) => {
      const id = req.params.id; 
      const sql = "DELETE FROM student_details WHERE Regno = ?";
      connection.query(sql, [id], (error, results) => {
          if (error) {
              console.error('Error deleting record:', error);
              res.status(500).json({ status: false, message: "Failed to delete record" });
          } else {
              if (results.affectedRows > 0) {
                  console.log('Record deleted successfully');
                  res.status(200).json({ status: true, message: "Record deleted successfully"});
              } else {
                  console.log('Record not found');
                  res.status(404).json({ status: false, message: "Record not found" });
              }
          }
      });
  };
  module.exports={add,show,update,del,search}