import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { fetchDevice } from '../../Redux/slice/device';
import Search from '../../Components/Search';
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

  return (
    <div className="cardDevice-Main">
      <div className="filterBlock">
        <Search value={value} setValue={setValue} />
        <Sort sorted={sorted} setSorted={setSorted} />
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
