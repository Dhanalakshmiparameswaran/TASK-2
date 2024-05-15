const Student = require('./db');
const add = async (req, res) => {
    
    try {
      const { Regno, Name, Mark, native } = req.body;
    const newStudent = await Student.create({ Regno, Name, Mark, native });
    console.log('Record added successfully');
    res.status(201).json({ status: true, message: 'Record added successfully', data: newStudent });
  } catch (error) {
    console.error('Error adding record to database:', error.message);
    res.status(500).json({ status: false, message: 'Failed to add record' });
  }
};

const show = async (req, res) => {
  try {
    const students = await Student.findAll();
    console.log('Records retrieved successfully');
    res.status(200).json({ status: true, message: 'Records retrieved successfully', data: students });
  } catch (error) {
    console.error('Error fetching records from database:', error.message);
    res.status(500).json({ status: false, message: 'Failed to retrieve records' });
  }
};

const search = async (req, res) => {
  const stuid = req.params.id;
  try {
    const student = await Student.findOne({ where: { Regno: stuid } });

    if (!student) {
      console.log('Record not found');
      return res.status(404).json({ status: false, message: 'Record not found' });
    }

    console.log('Record found');
    res.status(200).json({ status: true, message: 'Record found', data: student });
  } catch (error) {
    console.error('Error searching for record:', error.message);
    res.status(500).json({ status: false, message: 'Failed to search for record' });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const { Name, Mark, native } = req.body;

  try {
    const [numOfUpdatedRows, updatedStudent] = await Student.update(
      { Name, Mark, native },
      { where: { Regno: id } }
    );

    if (numOfUpdatedRows === 0) {
      console.log('Record not found');
      return res.status(404).json({ status: false, message: 'Record not found' });
    }

    console.log('Record updated successfully');
    res.status(200).json({ status: true, message: 'Record updated successfully', data: updatedStudent });
  } catch (error) {
    console.error('Error updating record:', error.message);
    res.status(500).json({ status: false, message: 'Failed to update record' });
  }
};

const del = async (req, res) => {
  const id = req.params.id;

  try {
    const numOfDeletedRows = await Student.destroy({ where: { Regno: id } });

    if (numOfDeletedRows === 0) {
      console.log('Record not found');
      return res.status(404).json({ status: false, message: 'Record not found' });
    }

    console.log('Record deleted successfully');
    res.status(200).json({ status: true, message: 'Record deleted successfully' });
  } catch (error) {
    console.error('Error deleting record:', error.message);
    res.status(500).json({ status: false, message: 'Failed to delete record' });
  }
};

module.exports = { add, show, search, update, del };
