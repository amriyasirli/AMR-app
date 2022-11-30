import React, { useState, useRef } from "react";
import { ScrollView, StyleSheet, Image, View, Alert, SafeAreaView, } from 'react-native'
import { Text, Input, Button } from "@rneui/themed";
import {METRICS, FONT, COLOR} from '../../style/index'
import PhoneInput from "react-native-phone-number-input";


const Scan = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const phoneInput = React.useRef(null);

    const OnPress = () => {
      if (phoneNumber.length !==0) {
          Alert.alert(
              "Confirm Number",
              phoneNumber,
              [
                  {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                  },

                  { 
                      text: "OK", 
                      onPress: () => console.log("OK Pressed"),
                  },
              ],
          );
      }
  }

  return (
    <ScrollView style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/img/logo.png')} resizeMode="contain" style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Input
          label="Nama"
          placeholder='Nama Lengkap'
          labelStyle={{color:COLOR.white, fontFamily:'Roboto-Regular', fontSize:FONT.size.font12}}
          placeholderTextColor={COLOR.light}
          inputStyle={{color:COLOR.white, fontFamily:'Poppins-Medium', fontSize:FONT.size.font14}}
          inputContainerStyle={{borderColor:COLOR.white, borderBottomWidth:1}}
          selectionColor={COLOR.white}
          
        />
        <Text style={{color:COLOR.white, fontFamily:'Roboto-Medium', marginStart:METRICS.screenWidth * (8 / 365), marginBottom:METRICS.screenWidth * (-5 / 365), zIndex:1}}>Nomor HP</Text>
          <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                codeTextStyle={{color:COLOR.light, marginTop:METRICS.screenWidth * (-5 / 365)}}
                countryPickerButtonStyle={{marginTop:METRICS.screenWidth * (-5 / 365)}}
                textInputStyle={styles.textInput}
                onChangeFormattedText={text => {
                  setPhoneNumber(text);
                }}
                defaultCode="ID"
                placeholder="8123456xxxx"
                layout='first'
            />
            <Input
                  label="Password"
                  placeholder='Password'
                  labelStyle={{color:COLOR.white, fontFamily:'Roboto-Regular', fontSize:FONT.size.font12}}
                  placeholderTextColor={COLOR.light}
                  inputStyle={{color:COLOR.white, fontFamily:'Poppins-Medium', fontSize:FONT.size.font14}}
                  inputContainerStyle={{borderColor:COLOR.white, borderBottomWidth:1,}}
                  selectionColor={COLOR.white}
                />
            
        <Button color={COLOR.white} buttonStyle={{paddingVertical:METRICS.screenWidth * (10 / 365), marginVertical:METRICS.screenWidth * (30 / 365), borderRadius:20}} titleStyle={{color:COLOR.primary, fontFamily:'Poppins-Bold'}} type='solid' title="CONTINUE" />
      </View>
    </ScrollView>
  )
}

export default Scan

const styles = StyleSheet.create({
  headerContainer:{
    position:'relative',
    height:METRICS.screenHeight,
    backgroundColor:COLOR.primary
  },
  imageContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:METRICS.screenWidth * (69 / 365),
    // borderWidth:1,
    // borderColor:'red',
  },
  logo:{
    // width:METRICS.screenWidth 10(69 / 365)0
  },
  container:{
    marginHorizontal:METRICS.screenWidth * (30 / 365),
    marginVertical:METRICS.screenWidth * (50 / 365)
  },
  textInput:{
    backgroundColor:COLOR.primary,
    color:COLOR.white,
    marginTop:METRICS.screenWidth * (-5 / 365),


  },
  phoneContainer:{
    marginStart:METRICS.screenWidth * (10 / 365),
    marginBottom:METRICS.screenWidth * (30 / 365),
    backgroundColor:COLOR.primary,
    borderColor:COLOR.white, borderBottomWidth:1.5,
    color:COLOR.white
  },
  btnLogin:{
    color:COLOR.lightPrimary,
  }
})