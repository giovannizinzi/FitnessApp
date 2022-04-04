import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Home from './screens/exercise/Home.js';
import Details from './screens/exercise/Details.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Card from './components/common/card/Card.js';
import Banner from './components/common/banner/Banner.js';
import Header from './components/home/Header.js';
import styles from './components/home/headerstyle.js';
import { RectButton, CircleButton } from "./components/exercise/Button.js";
const headerImage = require('./assets/images/header.jpg');
const notification = require('./assets/images/Notification.png');
const banner = require('./assets/images/BG.png');
const fire = require('./assets/images/fire.png');
const couple = require('./assets/images/couple.jpg');
const cycle = require('./assets/images/cycle.png');
const yoga = require('./assets/images/yoga.png');
const walk = require('./assets/images/walk.png');
const next = require('./assets/images/next.png');
const play = require('./assets/images/play.png');
const star = require('./assets/images/Star.png');
const book = require('./assets/images/Book.png');
const home = require('./assets/images/Home.png');
const heart = require('./assets/images/H.png');
const calendar = require('./assets/images/Calender.png');
const profile = require('./assets/images/User.png');
const plus = require('./assets/images/Plus.png');

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

// function BottomTabBar() {
//   return (
//     <Tab.Navigator
//     screenOptions={{
//       showLabel: false,
//       style : {
//         position: 'absolute',
//         bottom: 25,
//         left: 20,
//         right: 20,
//         elevation: 0,
//         borderRadius: 15,
//         height: 50,
//       }
//     }}>
//       <Tab.Screen name="Exercises" component={Home2} />
//       <Tab.Screen name="ExercisesAndDetails" component={ExerciseAndDetails} />

//     </Tab.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home2">
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Exercises" component={Home} />
        <Stack.Screen name="Details" component={Details} />     
         </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Exercises')}
      />
    </View>
  );
}

export default App;

const Home2 = () => {
  const [nextPage, setNextPage] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.screen}>
          <Header />
          <Banner />
        </View>
        <View style={{marginHorizontal: '3%'}}>
          <Label>Progress Towards Army Standards</Label>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <Card data={item} index={index} key={`Card-${index}`} />
            ))}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Label>Workout Videos</Label>
            <Text style={{opacity: 0.5, fontSize: 12,}}>
              View All
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <VideoPlay index={index} />
            ))}
          </View>
        </View>
      </SafeAreaView>
      <BottomTab/>
      </>
  );
}

const BottomTab = ({nextPage}) => {
  const navigation = useNavigation();

return (
  <View
    style={{
      position: 'absolute',
      bottom: 10,
      margin: 10,
      marginHorizontal: 25,
      borderRadius: 20,
      padding: 10,
      // width: '100%',
      backgroundColor: '#EDEDED',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <BottomButton image={home} title="Home" />
    <BottomButton image={heart} title="Exercise" onPress={() => navigation.navigate('Exercises')}/>
    <BottomButton
      image={plus}
      style={{
        position: 'absolute',
        left: '45%',
        top: -20,
        backgroundColor: '#EDEDED',
        padding: 8,
        borderRadius: 20,
      }}
    />
    <BottomButton />
    <BottomButton image={calendar} title="Progress" />
    <BottomButton image={profile} title="Profile"/>
  </View>
);
};

const BottomButton = ({image, style, imageStyle, title, onPress, ...props }) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Image
        source={image}
        style={[
          {
            height: image === plus ? 40 : 20,
            width: image === plus ? 40 : 20,
          },
          imageStyle,
        ]}
      />
      <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...props 
      }}
      onPress={onPress}
    >
    </TouchableOpacity>
      <Text>{title}</Text>
    </View>
    {image === home && (
      <View
        style={{
          width: '10%',
          position: 'absolute',
          height: 2,
          backgroundColor: '#8860a2',
          bottom: 0,
          left: 25,
        }}
      />
    )}
  </>
);

const VideoPlay = () => (
  <View
    style={{
      borderRadius: 15,
      marginHorizontal: 12,
      shadowOffset: {width: -5, height: 3},
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      backgroundColor: '#fff',
    }}>
    <View style={{borderRadius: 10, overflow: 'hidden'}}>
      <ImageBackground
        source={couple}
        style={{
          height: 150,
          width: 300,
        }}>
        <LinearGradient
          locations={[0, 1.0]}
          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60)']}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}></LinearGradient>
      </ImageBackground>
      <Text
        style={{
          position: 'absolute',
          bottom: 5,
          left: 10,
          color: '#fff',
        }}>
        Transformation
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          padding: 5,
          right: 10,
          top: 10,
          borderRadius: 5,
        }}>
        <Image source={star} style={{height: 10, width: 10}} />
      </View>
    </View>
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#8860a2',
          padding: 10,
          right: 25,
          top: -15,
          borderRadius: 15,
          zIndex: 3,
        }}>
        <Image source={play} style={{height: 10, width: 10}} />
      </View>
      <Text>
        2 Hour Bulking Trainer
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>
          <Image source={book} style={{height: 15, width: 15}} />
          {'   Beginner'}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#8860a2',
          }}>
          45 Min
        </Text>
      </View>
    </View>
  </View>
);

const Label = ({children}) => <Text style={styles.label}>{children}</Text>;

// This is data for the home screen!
const data = [
  {
    name: 'Weight',
    status: 85,
    image: cycle,
    lightColor: '#f8e4d9',
    color: '#fcf1ea',
    darkColor: '#fac5a4',
  },
  {
    name: 'Activity',
    status: 25,
    image: walk,
    lightColor: '#d7f0f7',
    color: '#e8f7fc',
    darkColor: '#aceafc',
  },
  {
    name: 'BodyFat',
    status: 85,
    image: yoga,
    lightColor: '#dad5fe',
    color: '#e7e3ff',
    darkColor: '#8860a2',
  },
];
