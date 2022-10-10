import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullDevice = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://localhost:8080/api/devices/' + id);
        setData(data);
      } catch (error) {
        console.error('Ошибка получения телефонов');
      }
    }
    fetchData();
  }, []);

  console.log(data);

  return <div></div>;
};

export default FullDevice;
