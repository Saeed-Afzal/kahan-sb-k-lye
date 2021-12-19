import { useNavigation } from '@react-navigation/core'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import {
  StyleSheet, Text, TouchableOpacity, Image,
  Pressable, TouchableHighlight, View, Alert,
  TextInput,
} from 'react-native'
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
// import Form from 'Form';

const handleForm = (e) => {


  const name = "nameref.current.value";
  e.preventDefault()


    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      dataSubmit(name)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}




function App({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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

  let text = 'Waiting..';
  let lati = '', longi = '';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {

    lati = JSON.stringify(location.coords.latitude);
    longi = JSON.stringify(location.coords.longitude);
    //  console.log(lati)
  }






  const dis0 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[0].latitude,
      "longitude": PostData[0].longitude
    }
  );
  const dis1 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[1].latitude,
      "longitude": PostData[1].longitude
    }
  );
  const dis2 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[2].latitude,
      "longitude": PostData[2].longitude
    }
  ); const dis3 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[3].latitude,
      "longitude": PostData[3].longitude
    }
  ); const dis4 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[4].latitude,
      "longitude": PostData[4].longitude
    }
  ); const dis5 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[5].latitude,
      "longitude": PostData[5].longitude
    }
  ); const dis6 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[6].latitude,
      "longitude": PostData[6].longitude
    }
  );
  const dis7 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[7].latitude,
      "longitude": PostData[7].longitude
    }
  );
  const dis8 = getDistance(
    {
      "latitude": lati,
      "longitude": longi
    },
    {
      "latitude": PostData[8].latitude,
      "longitude": PostData[8].longitude
    }
  );


  const dist = [dis0, dis1, dis2, dis3, dis4, dis5, dis6, dis7, dis8]
  // console.log(dis0);
  // const mind = dist.indexOf(Math.min(dist))
  // console.log(dis1);
  const minD = dist.indexOf(Math.min(dis0, dis1, dis2, dis3, dis4, dis5, dis6, dis7, dis8))
  // console.log(minD);
  // console.log(dis0);

  // console.log(Math.min(minD));


  // console.log('Saeed');
  // debugger

  const near = PostData[minD].branch_name;
  console.log(PostData[minD].branch_name);




  // console.log(ndis.lati);




  // console.log(PostData[0].latitude);




  // const dis =getDistance(
  //   {"latitude": current,
  //   "longitude": current
  //     },
  //   {
  //     "latitude": 24.8732834,
  //   "longitude": 67.0337457}
  // )












  // function ModalTester() {
  //   const [isModalVisible, setModalVisible] = useState(false);

  //   const toggleModal = () => {
  //     setModalVisible(!isModalVisible);
  //   };

  //   return (
  //     <View style={{ flex: 1 }}>
  //       <Button title="Show modal" onPress={toggleModal} />

  //       <Modal isVisible={isModalVisible}>
  //         <View style={{ flex: 1 }}>
  //           <Text>Hello!</Text>

  //           <Button title="Hide modal" onPress={toggleModal} />
  //         </View>
  //       </Modal>
  //     </View>
  //   );
  // }



  return (
    <SafeAreaView>
      <ScrollView>
        <centeredView>
          {/* <Image source={require('./images/logo.png')} style={{ width: 310, height: 159 }} /> */}
        </centeredView>
        <View style={styles.container}>
          <Card title="Local Modules">
            <Card.Title>MY LOCATION</Card.Title>
            {/* <Card.Image source={require('./images/map.jpg')}>



            </Card.Image> */}
            <Text style={{ paddingTop: 5 }}>
              Latitude: {lati} Longitude: {longi}
            </Text>
          </Card>

          <br />
          {/* <ModalExample/> */}
          {/* <ModalTester/> */}
          <Text style={styles.near}>
            Nearest Location: {near}
          </Text>
          <Button style={styles.buttonText2}

            icon={
              <Icon
                name="fastfood"
                size={15}
                color="white"
              />

            }
            title="Fill Form"
          />
          {/* <Text style={styles.paragraph}> {lati}</Text>
          <Text style={styles.paragraph}>{longi}</Text>
          <Text>{dis0}</Text>
          <Text>{dis1}</Text>
          <Text>{dis2}</Text>
          <Text>{dis3}</Text>
          <Text>{dis4}</Text>
          <Text>{dis5}</Text>
          <Text>{dis6}</Text>
          <Text>{dis7}</Text>
          <Text>{dis8}</Text> */}

          {/* <Text>{PostData.map((postDetail, index) => {
          return <h1>{postDetail.latitude}</h1>
        })}</Text>
        <Text>{PostData.map((postDetail, index) => {
          return <h1>{postDetail.longitude}</h1>
        })}</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}














const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  //Database


  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState({
    name: "",
    fathername: "",
    cnic: "",
    DOB: "",
    familymember: "",
    helpCategory: "",
    timeyouneed: "",
    monthlyIncome: "",
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {

    console.log(data);
    const date = new Date();
    const id = date.getTime().toString();
    db.collection("forms").doc(id).set(data)
      .then(() => {
        console.log("Document successfully written!");
        setShow(false)
        setData({
          name: "",
          fathername: "",
          cnic: "",
          DOB: "",
          familymember: "",
          helpCategory: "",
          timeyouneed: "",
          monthlyIncome: "",
        })
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    console.log(data);

  }





  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <App />
          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Enter Name"
            value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Enter Father Name"
            value={data.fathername} onChange={e => setData({ ...data, fathername: e.target.value })}

          />

          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Enter Cnic"
            value={data.cnic} onChange={e => setData({ ...data, cnic: e.target.value })}

          />

        
          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Daily, Month or Year"
            value={data.helpCategory} onChange={e => setData({ ...data, helpCategory: e.target.value })}

          />

          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Daily, 1 2 or 3 times"
            value={data.timeyouneed} onChange={e => setData({ ...data, timeyouneed: e.target.value })}

          />

          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Enter Number Of family Number"
            value={data.familymember} onChange={e => setData({ ...data, familymember: e.target.value })}

          />

          <TextInput style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            width: "90%",
            padding: 10,
            borderRadius: 2,
            marginVertical: 10

          }}
            placeholder="Enter Your Monthly Income"
            value={data.monthlyIncome} onChange={e => setData({ ...data, monthlyIncome: e.target.value })}

          />



          <TouchableOpacity onPress={() => {
            handleSubmit()
          }}>
            <Text style={{
              backgroundColor: "#0782F9",
              color: 'white',
              borderRadius: 2,
              justifyContent: "center",
              textAlign: "center",
              padding: 8
            }}>FORM SUBMIT</Text>
          </TouchableOpacity>
          <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
          <br />
          
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '90%',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  near: {

    color: '#0782F9',
    fontWeight: '700',
    fontSize: 26,
  },
  buttonText2: {

    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },




})
