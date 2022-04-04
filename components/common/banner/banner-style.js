import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {flex: 1},
    header: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {paddingHorizontal: 10, flex: 1, justifyContent: 'center'},
    bigTitle: {fontSize: 16, fontFamily: 'Poppins-Medium'},
    smallTitle: {fontSize: 10, fontFamily: 'Poppins-Regular', opacity: 0.8},
    image: {height: '100%', width: '100%'},
    fireImage: {height: 15, width: 15, alignSelf: 'center', margin: 5},
    banner: {
      marginTop: 20,
      padding: 30,
      resizeMode: 'contain',
      borderRadius: 20,
      overflow: 'hidden',
      flexDirection: 'row',
    },
    bannerContainer: {flex: 1},
    label: {fontFamily: 'Poppins-Medium', fontSize: 20, marginVertical: 10},
    model: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      zIndex: 10,
      height: '75%',
      width: '25%',
      transform: [{rotateY: '180deg'}],
    },
    imageContainer: {
      height: 50,
      width: 50,
      borderRadius: 25,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    screen: {margin: '3%'},
    offer: {color: 'white', fontFamily: 'Poppins-Regular', fontSize: 16},
    offerText: {color: 'white', fontSize: 16, fontFamily: 'Poppins-Regular'},
    offerText2: {color: 'white', fontSize: 10, fontFamily: 'Poppins-Regular'},
  
    rowLabel: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    fireContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });