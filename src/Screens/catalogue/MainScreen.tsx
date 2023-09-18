import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {View} from 'react-native';

import {FoldersList} from '../../Components/Catalogues/FoldersList/FoldersList';
import {CataloguesList} from '../../Components/Catalogues/CataloguesList/CataloguesList';
import {NewCatalogue} from '../../Components/Catalogues/NewCatalogue/NewCatalogue';
import {ScreenWrapper} from '../../Modules/ScreenWrapper';
import {SearchCatalogue} from '../../Components/Catalogues/SearchCatalogue/SearchCatalogue';

export function MainScreen(): JSX.Element {
  return (
    <ScreenWrapper>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#2563eb', '#fb923c']}
        className="h-full p-2">
        <View className="flex flex-col w-full h-full">
          <View className="mb-2">
            <SearchCatalogue />
            <FoldersList />
          </View>
          <CataloguesList />

          <NewCatalogue />
        </View>
      </LinearGradient>
    </ScreenWrapper>
  );
}
