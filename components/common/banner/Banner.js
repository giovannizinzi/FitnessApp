import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native'
import * as Progress from 'react-native-progress';
const model = require('../../../assets/images/health-icon.png');
import styles from './banner-style.js';
const banner = require('../../../assets/images/BG.png');

const Banner = () => (
    <View>
      <ImageBackground style={styles.banner} source={banner}>
        <View style={styles.bannerContainer}>
          <View style={styles.rowLabel}>
          </View>
          <OfferText>Notification: APFT in 14 days! </OfferText>
        </View>
      </ImageBackground>
      <Image source={model} style={styles.model} resizeMode="contain" />
    </View>
  );

export default Banner;

const OfferText = ({children}) => (
  <Text style={styles.offerText}>{children}</Text>
);

const OfferText2 = ({children}) => (
  <Text style={styles.offerText2}>{children}</Text>
);