import React from 'react';
import {SearchComponent} from '../../../Modules/SearchComponent';
import useCatalogueStore from '../../../store/auth/catalogueStore';

export const SearchCatalogue = () => {
  const setSearchQuery = useCatalogueStore(s => s.setSearchQuery);
  const searchQuery = useCatalogueStore(s => s.searchQuery);

  const changeQuery = (val: string) => {
    console.log('ch', val);
    setSearchQuery(val);
  };
  return <SearchComponent onSetQuery={changeQuery} searchQuery={searchQuery} />;
};
