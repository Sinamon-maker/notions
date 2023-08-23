import {View} from 'react-native';
import {AppButton} from '../../../Modules/AppButton/AppButton';

export const SortingButtons = () => {
  return (
    <View className="flex flex-row  justify-end mb-2">
      <AppButton
        onPress={() => console.log('press')}
        title="All"
        className="mr-2 shadow-md"
      />
      <AppButton
        onPress={() => console.log('press')}
        title="Ongoing"
        className="mr-2 shadow-md"
      />
      <AppButton
        onPress={() => console.log('press')}
        title="Done"
        className="mr-2 shadow-md"
      />
    </View>
  );
};
