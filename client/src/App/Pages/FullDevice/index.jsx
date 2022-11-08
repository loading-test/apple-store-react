import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartDeviceIndo from '../../Components/CartDeviceInfo';

const FullDevice = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get('http://localhost:8080/api/devices/' + id);
        setData(data);
      } catch (error) {
        alert('Ошибка получения телефонов');
      }
    }
    fetchData();
  }, []);

  return <CartDeviceIndo item={data} />;
};

export default FullDevice;
