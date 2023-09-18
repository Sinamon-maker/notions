import {MyDropdown} from '../../MyDropdown/MyDropdown';
import React from 'react';
import {SelectSearch} from './SelectSearch';
import userStore from '../../../store/auth/userStore';
import useCatalogueStore from '../../../store/auth/catalogueStore';
import {useGetDataById} from '../../../api/useGetDataById';
import {Data} from '../../../../globalTypes';

export const DropdownCatalogues = () => {
  const user = userStore(s => s.user);
  const activeFolder = useCatalogueStore(s => s.activeFolder);
  const activeCatalogue = useCatalogueStore(s => s.activeCatalogue);
  const setActiveCatalogue = useCatalogueStore(s => s.setActiveCatalogue);

  const {data: catalogues} = useGetDataById<Data>('tasks', user?.uid);
  console.log('cat', catalogues);
  const onSelect = (val: Data) => {
    setActiveCatalogue(val);
  };
  return <MyDropdown data={catalogues} />;
};
