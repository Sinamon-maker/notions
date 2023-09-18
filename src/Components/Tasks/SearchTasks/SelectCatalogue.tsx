import React from 'react';
import {SelectSearch} from './SelectSearch';
import userStore from '../../../store/auth/userStore';
import useCatalogueStore from '../../../store/auth/catalogueStore';
import {useGetDataById} from '../../../api/useGetDataById';
import {Data} from '../../../../globalTypes';

export const SelectCatalogue = () => {
  const user = userStore(s => s.user);
  const activeFolder = useCatalogueStore(s => s.activeFolder);
  const activeCatalogue = useCatalogueStore(s => s.activeCatalogue);
  const setActiveCatalogue = useCatalogueStore(s => s.setActiveCatalogue);

  const {data: catalogues} = useGetDataById<Data>('tasks', user?.uid);

  const onSelect = (val: Data) => {
    setActiveCatalogue(val);
  };

  const clearValueonClose = () => {
    setActiveCatalogue(null);
  };
  console.log('catalogues', catalogues, activeFolder);

  return (
    <SelectSearch
      defaultText="Enter catalogue name"
      selected={activeCatalogue}
      onSelect={onSelect}
      data={catalogues}
      clearValueonClose={clearValueonClose}
    />
  );
};
