import {Text, TextInput, View} from 'react-native';
import {AppButton} from '../../Modules/AppButton/AppButton';
import {IconsNames} from '../../../globalTypes';
import {useState} from 'react';

const dataset = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
];

export const MyDropdown = () => {
  const [open, setOpen] = useState(false);
  const height = open
    ? 'max-h-50 absolute top-14 w-full  z-200'
    : 'h-0 overflow-hidden';

  return (
    <View className=" z-40 w-full mb-2">
      <View className="flex flex-row border border-slate-50 rounded-lg overflow-hidden">
        <TextInput
          placeholder="choose folder"
          className="grow px-2"
          placeholderTextColor={'#94a3b8'}
        />
        <AppButton
          onPress={() => setOpen(!open)}
          name={IconsNames.UNFOLD}
          size={18}
          className="flex justify-center items-center bg-transparent"
        />
      </View>
      <View className={`${height}`}>
        {dataset.map(item => (
          <View className="p-2 bg-white">
            <Text key={item.label}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
