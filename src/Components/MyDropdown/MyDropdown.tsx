import React, {useRef} from 'react';
import {
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

import {Folder, IconsNames} from '../../../globalTypes';
import {useState} from 'react';
import {IconComponent} from '../../Modules';

type DropdownProps = {
  data: Folder[] | undefined;
  selected?: string;
  onSelect?: (val: Folder) => void;
};

export const MyDropdown = ({data, selected, onSelect}: DropdownProps) => {
  const [innerSelected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const DropdownButton = useRef<TouchableOpacity>(null);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [dropdownTop, setDropdownTop] = useState(0);
  const [wi, setWidth] = useState(0);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {});
  };

  const closeDropdown = () => {
    fadeIn();
    setOpen(false);
  };

  const openDropdown = () => {
    fadeOut();
    setOpen(true);
  };

  const toggleDropdown = () => {
    open ? closeDropdown() : onOpenDropdown();
  };
  const onItemPress = (item: Folder): void => {
    setSelected(item.id);
    onSelect && onSelect(item);
    closeDropdown();
  };
  const onOpenDropdown = (): void => {
    if (DropdownButton && DropdownButton.current) {
      DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h);

        setWidth(_w);
      });
      openDropdown();
    }
  };
  const height = open
    ? 'max-h-50 absolute overflow-hidden  w-full z-200  mx-2 rounded-lg'
    : 'h-0 overflow-hidden';

  return (
    <View className=" z-40 w-full mb-2">
      <TouchableOpacity
        ref={DropdownButton}
        onPress={toggleDropdown}
        className="">
        <View className="flex flex-row p-1 border items-center border-slate-50 rounded-lg overflow-hidden">
          <TextInput
            placeholder="choose folder"
            className="grow pb-2 px-2  text-lg  text-slate-50"
            placeholderTextColor={'#94a3b8'}
            value={selected ? selected : innerSelected}
          />
          <IconComponent icon={IconsNames.UNFOLD} size={18} />
        </View>
      </TouchableOpacity>
      {open && (
        <Modal visible={open} transparent animationType="none">
          <TouchableOpacity
            onPress={() => toggleDropdown()}
            className=" w-full h-full">
            <Animated.View
              className={`${height}`}
              style={[
                {opacity: fadeAnim},
                Platform.OS === 'ios'
                  ? styles.shadowIosProp
                  : styles.elevationAndroid,
                {top: dropdownTop, width: wi},
              ]}>
              {data &&
                data.map(item => (
                  <Pressable onPress={() => onItemPress(item)}>
                    <View className="p-2 bg-white ">
                      <Text key={item.name}>{item.name}</Text>
                    </View>
                  </Pressable>
                ))}
            </Animated.View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 20,
  },
  inputWrap: {
    marginBottom: 4,
  },
  input: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    color: 'green',

    fontSize: 16,
    lineHeight: 20,
  },
  content: {
    width: '100%',

    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'absolute',
    top: 50,
    zIndex: 50,

    maxHeight: '70%',
    paddingBottom: 16,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,

    maxHeight: '100%',
  },
  shadowIosProp: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 8},
    shadowOpacity: 0.14,
    shadowRadius: 4,
  },
  elevationAndroid: {
    elevation: 14,
    shadowColor: '#000000',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  text: {
    flex: 1,
    color: 'green',

    fontSize: 16,
    lineHeight: 20,
  },
});
