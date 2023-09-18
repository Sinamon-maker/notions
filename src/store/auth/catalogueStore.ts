import {create} from 'zustand';
import {Data} from '../../../globalTypes';

export interface CatalogueStoreProp {
  searchQuery: string;
  activeFolder: string;
  activeCatalogue: Data | null;
  setSearchQuery: (search: string) => void;
  setActiveFolder: (id: string) => void;
  setActiveCatalogue: (val: Data | null) => void;
}

const useCatalogueStore = create<CatalogueStoreProp>(set => ({
  searchQuery: '',
  activeFolder: '',
  activeCatalogue: null,
  setSearchQuery: search => set(() => ({searchQuery: search})),
  setActiveFolder: id => set(() => ({activeFolder: id})),
  setActiveCatalogue: val => set(() => ({activeCatalogue: val})),
}));

export default useCatalogueStore;
