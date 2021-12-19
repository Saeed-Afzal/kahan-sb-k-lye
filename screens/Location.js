import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import * as Location from 'expo-location';
import PostData from './post/food_bank.json'

import { getDistance, getPreciseDistance } from 'geolib';

export default function Location() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
     
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
   
  
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
  
       lati = JSON.stringify(location.coords.latitude);
       longi= JSON.stringify(location.coords.longitude);
      //  console.log(lati)
  
  
      
  
    }
  
   
  
  
  
  
  const dis0 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[0].latitude,
    "longitude": PostData[0].longitude}
  );
  const dis1 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[1].latitude,
    "longitude": PostData[1].longitude}
  );
  const dis2 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[2].latitude,
    "longitude": PostData[2].longitude}
  );const dis3 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[3].latitude,
    "longitude": PostData[3].longitude}
  );const dis4 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[4].latitude,
    "longitude": PostData[4].longitude}
  );const dis5 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[5].latitude,
    "longitude": PostData[5].longitude}
  );const dis6 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[6].latitude,
    "longitude": PostData[6].longitude}
  );
  const dis7 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[7].latitude,
    "longitude": PostData[7].longitude}
  );
  const dis8 =getDistance(
    {"latitude": lati,
    "longitude": longi
      },
    {
      "latitude": PostData[8].latitude,
    "longitude": PostData[8].longitude}
  );
  
  
  const dist = [dis0,dis1,dis2,dis3,dis4,dis5,dis6,dis7,dis8]

  const minD = dist.indexOf( Math.min(dis0,dis1,dis2,dis3,dis4,dis5,dis6,dis7,dis8))

  
  
  console.log('ameen');
  

  
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{lati}</Text>
        <Text style={styles.paragraph}>{longi}</Text>
        <Text>{dis0}</Text>
        
        <Text>{dis1}</Text>
        <Text>{dis2}</Text>
        <Text>{dis3}</Text>
        <Text>{dis4}</Text>
        <Text>{dis5}</Text>
        <Text>{dis6}</Text>
        <Text>{dis7}</Text>
        <Text>{dis8}</Text>
      
  
       
  
  
        {/* <Text>{PostData.map((postDetail, index) => {
            return <h1>{postDetail.latitude}</h1>
          })}</Text>
          <Text>{PostData.map((postDetail, index) => {
            return <h1>{postDetail.longitude}</h1>
          })}</Text> */}
      </View>
    );
  }
  
  