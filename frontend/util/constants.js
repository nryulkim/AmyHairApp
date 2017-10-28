import {
  Dimensions, StyleSheet
} from 'react-native';

export const windowSize = Dimensions.get('window');
const maxWidth = windowSize.width;

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'space-between',
    backgroundColor: '#ececec',
    width: maxWidth
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  main_header: {
    justifyContent: 'space-between',
    backgroundColor: '#039BE5',
    height: 76
  },
  main_title: {
    fontSize: 26,
    padding: 15
  },
  main_content:{

  },
  main_footer: {
    backgroundColor: '#039BE5',
  }
});
