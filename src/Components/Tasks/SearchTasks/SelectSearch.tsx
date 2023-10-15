import React, {useRef, useState} from 'react';
import {
  Animated,
  View,
  Text,
  Platform,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {SearchComponent} from '../../../Modules/SearchComponent';
import {Data, IconsNames} from '../../../../globalTypes';
import {IconComponent} from '../../../Modules';

export type SelectProps = {
  defaultText: string;
  data: Data[] | undefined;
  selected: Data | null;
  onSelect?: (val: Data | null) => void;
  clearValueonClose?: () => void;
};

export const SelectSearch = ({
  defaultText,
  data,
  onSelect,
  selected,
  clearValueonClose,
}: SelectProps) => {
  const [isOpened, setOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const [innerSelected, setSelected] = useState<Data | null>(null);
  const DropdownButton = useRef<TextInput>(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [wi, setWidth] = useState(0);

  const filterdData = (list: Data[] | undefined, query: string) => {
    if (list) {
      return list.filter(it => it.title.includes(query));
    }
    return [];
  };
  const filtered = filterdData(data, searchQuery);

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
  const openDropdown = () => {
    console.log('open dropdown');
    fadeOut();
    setOpened(true);
  };
  const closeDropdown = () => {
    fadeIn();
    setOpened(false);
  };
  const closeDropdownWithoutWuery = () => {
    closeDropdown();
    setSearchQuery('');
  };

  const toggleDropdown = () => {
    isOpened ? closeDropdownWithoutWuery() : onOpenDropdown();
  };

  const selectItem = (item: Data) => {
    setSearchQuery('');
    setSelected(item);
    onSelect && onSelect(item);
    closeDropdown();
  };

  const onOpenDropdown = (): void => {
    if (DropdownButton && DropdownButton.current) {
      DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
        console.log(_fx, _fy, _w, h, _px, py);
        setDropdownTop(py + h);

        setWidth(_w);
      });
      openDropdown();
    }
  };

  const onChange = (text: string) => {
    setSelected(null);
    onSelect && onSelect(null);
    setSearchQuery(text);
  };

  const onPressClose = () => {
    setSearchQuery('');
    closeDropdown();
    clearValueonClose && clearValueonClose();
  };
  return (
    <View
      style={[styles.container, {overflow: !isOpened ? 'hidden' : 'visible'}]}>
      <View style={styles.inputWrap}>
        <SearchComponent
          ref={DropdownButton}
          onPressClose={onPressClose}
          placeholder={defaultText}
          searchQuery={selected ? selected.title : searchQuery}
          onSetQuery={onChange}
          onTouchStart={onOpenDropdown}
          iconClose={true}
          isVisible={Boolean(searchQuery)}
        />
      </View>
      <Modal visible={isOpened} transparent animationType="none">
        <TouchableOpacity
          onPress={() => toggleDropdown()}
          className=" w-full h-full">
          <Animated.View
            style={[
              styles.content,
              {opacity: fadeAnim},
              {top: dropdownTop, width: wi},
              Platform.OS === 'ios'
                ? styles.shadowIosProp
                : styles.elevationAndroid,
            ]}>
            <ScrollView nestedScrollEnabled={true} style={styles.scrollView}>
              {filtered.length === 0 ? (
                <View style={styles.item}>
                  <Text style={styles.text}>nothing found</Text>
                </View>
              ) : (
                filtered.map(it => (
                  <Pressable key={it.id} onPress={() => selectItem(it)}>
                    <View style={styles.item}>
                      <Text style={styles.text}>{it.title}</Text>
                      {selected && selected.id === it.id && (
                        <IconComponent
                          icon={IconsNames.CHECK}
                          color="#fb923c"
                        />
                      )}
                    </View>
                  </Pressable>
                ))
              )}
            </ScrollView>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
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
    marginLeft: 12,
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
