import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {View} from 'react-native';

import {SearchComponent} from '../Modules/SearchComponent/SearchComponent';

import {FoldersList} from '../Components/Catalogues/FoldersList/FoldersList';
import {CataloguesList} from '../Components/Catalogues/CataloguesList/CataloguesList';
import {NewCatalogue} from '../Components/Catalogues/NewCatalogue/NewCatalogue';
import {ScreenWrapper} from '../Modules/ScreenWrapper/ScreenWrapper';

export function MainScreen(): JSX.Element {
  return (
    <ScreenWrapper>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#2563eb', '#fb923c']}
        className="h-full p-2 ">
        <View className="mb-2">
          <SearchComponent />
          <FoldersList />
        </View>
        <CataloguesList />

        <NewCatalogue />
      </LinearGradient>
    </ScreenWrapper>
  );
}
