import {
  Dimensions, StyleSheet
} from 'react-native';

export const windowSize = Dimensions.get('window');
const maxWidth = windowSize.width;

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'space-between',
    backgroundColor: '#fcfcfc',
    width: maxWidth
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  search_container:{
    backgroundColor: '#fcfcfc',
    height: 66
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
  },
  search_listitem: {
    width: maxWidth,
    backgroundColor: 'transparent',
    paddingLeft: 15
  }
});
