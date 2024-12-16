import React, { useEffect, useState } from "react";
import { getRecords, createRecord } from "../services/recordService";
import "../styles/RecordList.css";

type Record = {
  id: string;
  name: string;
  email: string;
};

const RecordList: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecords();
      setRecords(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Registros</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            {record.name} - {record.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
