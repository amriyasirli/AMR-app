import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ListItem, Avatar, Text } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {METRICS, FONT, COLOR} from '../../style/index'

const Profil = () => {
  return (
    <ScrollView style={styles.headerContainer}>
      {/* <View> */}
        <ImageBackground source={require('../../assets/img/bg-primary.png')} resizeMode="stretch" style={styles.profilBg}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <Image source={require('../../assets/img/photo-profile.png')} />
          <View style={{paddingHorizontal:17}}>
            <Text style={{fontFamily:'Poppins-Regular', color:COLOR.white, fontSize:FONT.size.font14}}>Yassirli Amri</Text>
            <Text style={{fontFamily:'Roboto-Bold', color:COLOR.white, fontSize:FONT.size.font14}}>+62 831 6823 2843</Text>
          </View>
        </View>
        <Ionicons name="camera-reverse-outline" size={28} color={COLOR.white} style={{position:'absolute', top:16, right:13}} />
        </ImageBackground>
      {/* </View> */}
      <ListItem
        containerStyle={{backgroundColor:'transparent'}}
      >
        <Ionicons name="person" size={21} color={COLOR.primary} />

        <ListItem.Content>
          <ListItem.Title style={{ color: COLOR.secondary, fontFamily:'Poppins-Bold', fontSize:14}}>
            Akun
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={21} color={COLOR.secondary} />
      </ListItem>
      <ListItem
        containerStyle={{backgroundColor:'transparent'}}
      >
        <Ionicons name="lock-closed" size={21} color={COLOR.primary} />

        <ListItem.Content>
          <ListItem.Title style={{ color: COLOR.secondary, fontFamily:'Poppins-Bold', fontSize:14}}>
            Ganti Password
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={21} color={COLOR.secondary} />
      </ListItem>
      <ListItem
        containerStyle={{backgroundColor:'transparent'}}
      >
        <Ionicons name="information-circle" size={21} color={COLOR.primary} />

        <ListItem.Content>
          <ListItem.Title style={{ color: COLOR.secondary, fontFamily:'Poppins-Bold', fontSize:14}}>
            Pengumuman
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={21} color={COLOR.secondary} />
      </ListItem>
      <ListItem
        containerStyle={{backgroundColor:'transparent'}}
      >
        <Ionicons name="receipt" size={21} color={COLOR.primary} />

        <ListItem.Content>
          <ListItem.Title style={{ color: COLOR.secondary, fontFamily:'Poppins-Bold', fontSize:14}}>
            Riwayat
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={21} color={COLOR.secondary} />
      </ListItem>
      <ListItem
        containerStyle={{backgroundColor:'transparent'}}
      >
        <Ionicons name="bar-chart" size={21} color={COLOR.primary} />

        <ListItem.Content>
          <ListItem.Title style={{ color: COLOR.secondary, fontFamily:'Poppins-Bold', fontSize:14}}>
            Grafik
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={21} color={COLOR.secondary} />
      </ListItem>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal:20, paddingHorizontal:10, marginTop:40, backgroundColor:COLOR.lightPrimary, borderRadius:18}}>
        <Ionicons name="log-out-outline" size={30} color={COLOR.white} style={{backgroundColor:COLOR.primary, borderRadius:10, marginVertical:5, padding:2}} />
        <Text style={{fontFamily:'Poppins-Bold', fontSize:FONT.size.font12, color:COLOR.primary, marginRight:10 }}>Sign Out</Text>
      </View>
    </ScrollView>
  )
}

export default Profil

const styles = StyleSheet.create({
  headerContainer:{
    position:'relative',
    paddingTop:59,
    height:METRICS.screenHeight,
    backgroundColor:COLOR.white,
    paddingHorizontal:30,


  },
  profilBg:{
    // flex:1,
    paddingLeft:33,
    paddingVertical:30,
    justifyContent:'center',
    alignItems:'flex-start',
    height:110,
    marginBottom:30,
    // borderRadius:30,
    // borderWidth:1,
    // borderColor:'red'
    // width:'80%',

  },
  
})