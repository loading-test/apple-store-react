import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Search from '../../Components/Search';
import CardDevice from '../../Components/CardDevice';
import Sort from '../../Components/Sort';
import { deviceData } from '../../Redux/devices/selectors';
import { selectFilter } from '../../Redux/filter/selectors';
import { setSearchValue } from '../../Redux/filter/slice';
import { useSortDevice } from '../../hooks/useSortDevice';
import Preloader from '../../Components/common/Preloader';
import NotFound from '../NotFound';

const HomePage = () => {
  const { items, status } = useSelector(deviceData);
  const { searchValue, sort } = useSelector(selectFilter);
  const { sortedDevice, sortBy, setSortBy } = useSortDevice(items);

  const filterDevice = sortedDevice
    .filter((obj) => {
      const search = (obj.name + ' ' + obj.model).toLowerCase();
      return search.includes(searchValue.toLowerCase());
    })
    .map((item) => {
      return <CardDevice key={item._id} item={item} />;
    });

  return (
    <div className="cardDevice-Main">
      <div className="filterBlock">
        <Search value={searchValue} setValue={setSearchValue} />
        <Sort sort={sort} setSortBy={setSortBy} sortBy={sortBy} />
      </div>
      {status === 'error' ? (
        <NotFound />
      ) : (
        <div>
          {status === 'loading' ? (
            <Preloader />
          ) : (
            <Grid container spacing={1} className="gridContainer">
              {filterDevice}
            </Grid>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
