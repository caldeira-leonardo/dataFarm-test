import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Theme} from '../../../Theme/Theme';
import {SepectProps} from './SelectTypes';
import Text from '../Text/Text';

function Select({
  defaultValue = {key: -1, value: ''},
  searchOnOptions = false,
  value,
  onChangeValue,
  options,
  searchLabel,
  placeholder,
  errorMessage,
  hasError,
}: SepectProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <Dropdown
          style={[
            styles.dropdown,
            isFocus && styles.onFocus,
            value?.subtitle ? styles.subtitle : {},
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[
            styles.selectedTextStyle,
            value?.subtitle ? styles.subtitle : {},
          ]}
          mode="modal"
          data={options}
          search={searchOnOptions}
          labelField="value"
          valueField="key"
          placeholder={placeholder}
          searchPlaceholder={searchLabel}
          value={value.value ? value : defaultValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            onChangeValue(item);
            setIsFocus(false);
          }}
        />
        {value?.subtitle && (
          <Text style={styles.text} variant="small" color="subtitle" bold>
            {value?.subtitle}
          </Text>
        )}
      </View>
      {hasError && (
        <Text color="error" bold onPress={() => setIsFocus(true)}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

export default Select;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
  },
  dropdown: {
    height: 50,
    borderColor: Theme.colors.separator,
    borderBottomWidth: 2,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    height: '100%',
    zIndex: 1,
    textAlignVertical: 'center',
  },
  SearchStyle: {
    height: 40,
    fontSize: 16,
  },
  onFocus: {
    borderColor: Theme.colors.secondaryDark,
  },
  text: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    zIndex: -1,
  },
  subtitle: {
    top: -4,
  },
});
