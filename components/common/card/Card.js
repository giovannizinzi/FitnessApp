import React from 'react';
import { View, Text, Image } from 'react-native'
import * as Progress from 'react-native-progress';
const next = require('../../../assets/images/next.png');

const Card = ({data, index}) => {
    return (
      <View
        style={{
          flex: 1,
          height: index === 1 ? 180 : 150,
          padding: 10,
          alignSelf: 'center',
          backgroundColor: data.color,
          justifyContent: 'space-between',
          marginHorizontal: 8,
          borderRadius: 10,
          shadowColor: 'lightgrey',
          shadowOffset: {width: -5, height: 5},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        }}>
        <Image source={data.image} style={{height: 25, width: 25}} />
        <View style={{alignSelf: 'center', margin: 5}}>
          <Progress.Circle
            size={50}
            progress={data.status / 100}
            showsText
            unfilledColor="#ededed"
            borderColor="#ededed"
            color={data.darkColor}
            direction="counter-clockwise"
            fill="white"
            strokeCap="round"
            thickness={5}
            style={{
              shadowColor: 'grey',
              shadowOffset: {width: 2, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 1,
            }}
            textStyle={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>{data.name}</Text>
        </View>
      </View>
    );
  };

export default Card;