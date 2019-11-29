import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/styles';
import {offset} from '../../helpers/deviceHelper';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addForm: {
    backgroundColor: 'white',
  },
  contentBody: {
    flex: 1,
  },
  bottomBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: offset.bottom + 10,
  },
  buttonText: {
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 20,
  },
  hideCheckBox: {},
});
