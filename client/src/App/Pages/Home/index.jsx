import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { fetchDevice, setItems } from '../../Redux/slice/device';
import Search from '../../Components/Search';
import { useSortPrice } from '../../Components/hooks/useSortPrice';
import CardDevice from '../../Components/CardDevice';
import Sort from '../../Components/Sort';

const HomePage = () => {
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.devices);
  const [value, setValue] = useState('');
  const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });

  useEffect(() => {
    dispatch(fetchDevice());
  }, []);

  const device = devices.items;

  const sortBy = () => {
    const deviceCopy = [...device];
    deviceCopy.sort((a, b) => {
      if (sorted.reversed) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    setItems(deviceCopy);
    setSorted({ sorted: 'id', reversed: !sorted.reversed });
  };

  return (
    <div className="cardDevice-Main">
      <div className="filterBlock">
        <Search value={value} setValue={setValue} />
        <Sort sortBy={sortBy} />
      </div>
      <Grid container spacing={1} className="gridContainer">
        {device &&
          device
            .filter((obj) => {
              const search = (obj.name + ' ' + obj.model).toLowerCase();
              return search.includes(value.toLowerCase());
            })
            .map((item) => {
              return <CardDevice key={item._id} item={item} />;
            })}
      </Grid>
    </div>
  );
};

export default HomePage;
