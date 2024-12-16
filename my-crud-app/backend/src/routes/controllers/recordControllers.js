const Record = require("../models/recordModel");

// Obtener todos los registros
exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.status(200).json(records);
};

// Crear un registro
exports.createRecord = async (req, res) => {
  const newRecord = new Record(req.body);
  await newRecord.save();
  res.status(201).json(newRecord);
};

// Actualizar un registro
exports.updateRecord = async (req, res) => {
  const updatedRecord = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedRecord);
};

// Eliminar un registro
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
