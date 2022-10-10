import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { setSearchValue } from '../../Redux/filter/slice';

const Search = ({ value, setValue }) => {
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearcheValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearcheValue(e.target.value);
  };

  return (
    <div className={styles.searchMain}>
      <img className={styles.searchIcon} src="search.svg" alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.inputSearch}
        placeholder="Поиск..."
      />
      {value && (
        <img src="close_icon.svg" alt="close" className={styles.closeIcon} onClick={onClickClear} />
      )}
    </div>
  );
};

export default Search;
