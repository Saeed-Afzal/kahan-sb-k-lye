


import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity,  Pressable,TouchableHighlight, View, Alert} from 'react-native'
import { Card, Button, Icon, Chip } from 'react-native-elements';
import { auth } from '../firebase'
import * as Location from 'expo-location';
import PostData from './post/food_bank.json'

import { getDistance, getPreciseDistance } from 'geolib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-web';
import Modal1 from './Modal';
// import Modal1 from 'Modal';
import Modal from "react-native-modal";






function Form() {
  





  









  




  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

 
       
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}














const Form = () => {
  const navigation = useNavigation()

 
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  
    
 
 
})
