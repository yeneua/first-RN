import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> 김예나 </Text>
      <Text style={styles.chat}>나와의 채팅</Text>
      <Text style={styles.profile}>프로필 편집</Text>
      <Text style={styles.story}>카카오스토리</Text>
      <Image source={require( './img/gift.png')} style={styles.imageView_gift}/>
      <Image source={require( './img/qr.png')} style={styles.imageView_qr}/>
      <Image source={require( './img/setting.png')} style={styles.imageView_setting}/>
      <Image source={require( './img/profile.png')} style={styles.imageView_profile}/>
      <Image source={require( './img/edit.png')} style={styles.imageView_edit}/>
      <Image source={require( './img/chat.png')} style={styles.imageView_chat}/>
      <Image source={require( './img/story.png')} style={styles.imageView_story}/> 
    </View>
  )
}

const styles = StyleSheet.create({
   container : {
     flex : 1,
     backgroundColor : '#859299',
     alignItems:'center',
     justifyContent:'center'
   },
   name : {
     backgroundColor : '#859299',
     fontSize : 25,
     color : 'white',
     position : "absolute",
     top:530, left : 150
   },
   chat : {
    backgroundColor : '#859299',
     fontSize : 15,
     color : 'white',
     margin : 30,
     position : "absolute",
     top: 650, left:10
   },
   profile : {
    backgroundColor : '#859299',
    fontSize : 15,
    color : 'white',
    margin : 30,
    position : "absolute",
    top : 650, left:125
  },
   story : {
    backgroundColor : '#859299',
    fontSize : 15,
    color : 'white',
    margin : 30,
    position : "absolute",
    top : 650,right:10
  },
  imageView_gift:{
    backgroundColor : '#859299',
    width:30,
    height:30,
    position : "absolute",
    top:10, right : 80
  },
  imageView_qr:{
    backgroundColor : '#859299',
    width:30,
    height:30,
    position : "absolute",
    top:10, right : 45
  },
  imageView_setting:{
    backgroundColor : '#859299',
    width:30,
    height:30,
    position : "absolute",
    top:10, right : 10
  },
  imageView_profile:{
    width:120,
    height:120,
    position : "absolute",
    top:400, left:135
  },
  imageView_edit:{
    backgroundColor : '#859299',
    width :55,
    height :55,
    margin:30,
    position : "absolute",
    top:575, left : 20
  },
  imageView_chat:{
    backgroundColor : '#859299',
    width :55,
    height :55,
    margin:30,
    position : "absolute",
    top:575, left: 135
  },
   imageView_story : {
    backgroundColor : '#859299',
     width :100,
     height :100,
     margin:0,
     position : "absolute",
     top:580, right : 30
   }
 });

export default App;