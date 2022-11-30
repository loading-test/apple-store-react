import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Pagination } from '@mui/material';
import Search from '../../Components/Search';
import CardDevice from '../../Components/CardDevice';
import Sort from '../../Components/Sort';
import { deviceData } from '../../Redux/devices/selectors';
import { selectFilter } from '../../Redux/filter/selectors';
import {
  setCategoryId,
  setCurrentPage,
  setSearchValue,
  setSizePage,
} from '../../Redux/filter/slice';
import { useSortDevice } from '../../hooks/useSortDevice';
import Preloader from '../../Components/common/Preloader';
import NotFound from '../NotFound';
import { fetchDevice } from '../../Redux/devices/slice';
import { Stack } from '@mui/system';
import styles from './Home.module.scss';
import Categories from '../../Components/Categories';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(deviceData);
  const { searchValue, sort, page, size } = useSelector(selectFilter);
  const { sortedDevice, sortBy, setSortBy } = useSortDevice(items);
  const { categoryId } = useSelector(selectFilter);

  const onChangeFilter = useCallback((id) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getDevices = async () => {
    const category = categoryId > 0 ? `${categoryId}` : '';
    const search = searchValue ? `${searchValue}` : '';

    dispatch(
      fetchDevice({
        category,
        search,
        size,
        page: String(page),
      }),
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getDevices();
  }, [categoryId, page, size, searchValue]);

  const filterDevice = sortedDevice
    .filter((obj) => {
      const search = (obj.name + ' ' + obj.model).toLowerCase();
      return search.includes(searchValue.toLowerCase());
    })
    .map((item) => {
      return <CardDevice key={item._id} {...item} />;
    });

  return (
    <div className="cardDevice-Main">
      <div className="header__appbar__toolbar__link">
        <Categories value={categoryId} onChangeCategory={onChangeFilter} />
      </div>
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
            <>
              <Grid container spacing={1} className="gridContainer">
                {filterDevice}
              </Grid>
              <Stack className={styles.pagination_block} spacing={2}>
                <Pagination
                  page={page}
                  count={3}
                  onChange={(_, num) => onChangePage(num)}
                  variant="outlined"
                  shape="rounded"
                />
              </Stack>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
