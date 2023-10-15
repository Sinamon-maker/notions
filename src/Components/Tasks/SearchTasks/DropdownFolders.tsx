import {MyDropdown} from '../../MyDropdown/MyDropdown';
import React from 'react';

import userStore from '../../../store/auth/userStore';
import useCatalogueStore from '../../../store/auth/catalogueStore';
import {useGetDataById} from '../../../api/useGetDataById';
import {Folder} from '../../../../globalTypes';

export const DropdownFolders = () => {
  const user = userStore(s => s.user);
  const activeFolder = useCatalogueStore(s => s.activeFolder);
  const setActiveCatalogue = useCatalogueStore(s => s.setActiveCatalogue);
  const setActiveFolder = useCatalogueStore(s => s.setActiveFolder);

  const {data: folders} = useGetDataById<Folder>('folders', user?.uid);
  const foldersAll =
    user !== null && folders && folders.length > 1
      ? [{id: 'all', userId: user.uid, name: 'all', createdAt: 78}, ...folders]
      : folders;

  const onSelect = (val: Folder) => {
    setActiveFolder(val.id);
    setActiveCatalogue(null);
  };
  return (
    <MyDropdown
      data={foldersAll}
      selected={foldersAll?.find(it => it.id === activeFolder)?.name}
      onSelect={onSelect}
    />
  );
};
