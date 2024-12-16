import axios from "axios";

const API_URL = "http://localhost:5000/api/records";

export const getRecords = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createRecord = async (record: { name: string; email: string }) => {
  const response = await axios.post(API_URL, record);
  return response.data;
};

// Otros métodos: updateRecord, deleteRecord
