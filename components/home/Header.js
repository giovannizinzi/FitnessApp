import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native'
import * as Progress from 'react-native-progress';
const headerImage = require('../../assets/images/header.jpg');
const notification = require('../../assets/images/Notification.png');
import styles from './headerstyle.js';


const Header = () => (
    <View style={styles.header}>
      <ImageContainer image={headerImage} />
      <HeaderTitle />
      <ImageContainer image={notification} height={'50%'} width={'50%'} />
    </View>
);
export default Header;

const HeaderTitle = () => (
    <View style={styles.title}>
      <Text style={styles.bigTitle}>Hey, Giovanni</Text>
      <Text style={styles.smallTitle}>{new Date().toLocaleDateString('en-US', options) + ''}</Text>
    </View>
  );

var options = { hour12: false };

const ImageContainer = ({image, height = '100%', width = '100%'}) => (
    <View style={styles.imageContainer}>
      <Image source={image} style={[{height, width}]} />
    </View>
  );