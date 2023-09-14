import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Toast, {BaseToast} from 'react-native-toast-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts, images } from '../../theme';

function ToastProvider() {
  const inset = useSafeAreaInsets();
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: colors.green}}
        text1Style={styles.text1}
        text2NumberOfLines={2}
        text2Style={styles.text2}
      />
    ),
    error: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'red'}}
        text1Style={styles.text1}
        text2NumberOfLines={2}
        text2Style={styles.text2}
      />
    ),
  };

  return(
    <Toast
      ref={ref => Toast.setRef(ref)}
      topOffset={inset.top}
      position={'top'}
      config={toastConfig}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
  iconView: {
    height: 30,
    width: 30,
    aspectRatio: 1,
    marginLeft: 10,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 15,
    fontFamily: fonts.semiBold,
    marginLeft: -15,
  },
  text2: {
    fontSize: 13,
    fontFamily: fonts.medium,
    marginLeft: -15,
    lineHeight: 15,
  },
});

export default ToastProvider;
