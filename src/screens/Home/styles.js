import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 96,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282B5A',
  },
  headerTitle: {
    color: '#E1E1E6',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#191d3a',
  },
  bodyTitle: {
    color: '#E1E1E6',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',

    marginTop: 30,
    marginLeft: 24,
  },

  giftList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default styles;
