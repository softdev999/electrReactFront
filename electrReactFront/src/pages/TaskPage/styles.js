import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/styles';
import {offset} from '../../helpers/deviceHelper';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  addForm: {},
  contentBody: {
    flex: 1,
  },
  bottomBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
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
