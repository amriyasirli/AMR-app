import { Text, Alert, SafeAreaView, ScrollView, StyleSheet, View, Image } from 'react-native'
import { Input, Badge, Button, ListItem, Avatar } from "@rneui/themed";
import {METRICS, FONT, COLOR} from '../../style/index'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashline from '../../components/Dashline'

const list = [
  {
    i: '1',
    nomor: 'TEGU 06567823',
    seal: "MYU8769869",
  },
  {
    i: '2',
    nomor: 'TEGU 06567823',
    seal: 'MYT9909970',
  },
  {
    i: '3',
    nomor: 'TEGU 06567823',
    seal: "MYU8769869",
  },
  {
    i: '4',
    nomor: 'TEGU 06567823',
    seal: 'MYT9909970',
  },
]

const Detail = () => {
  return (
    <ScrollView style={{backgroundColor:COLOR.white, height:METRICS.screenHeight}}>
      <View style={styles.breadcrumb}>
        <Ionicons name="arrow-back-outline" size={METRICS.screenWidth * (24 / 365)} color={COLOR.primary} />
        <Text style={styles.textBreadcrumb}>Container Detail</Text>
      </View>
      <View style={styles.containerHeader}>
        <View>
          <Text style={styles.textHeader}>TEGU 928297729</Text>
          <Text style={styles.textHeader}>McDonal's</Text>
        </View>
        <Avatar source={require('../../assets/img/photo-profile.png')} size={50} />
      </View>
      <Dashline />
      {
        list.map((l, i) => (
          <View key={i} style={{marginTop:FONT.size.font10, paddingHorizontal:FONT.size.font30, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={styles.list}>{l.i}. {l.nomor}</Text>
            <Text style={styles.list}>{l.seal}</Text>
          </View>
        ))
      }
      <Dashline />
      <View style={{marginTop:FONT.size.font10, paddingHorizontal:FONT.size.font30, flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.bold}>Total payment</Text>
        <Text style={styles.amount}>  $ 145.00</Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardColorLeft}>
          <Text style={{fontFamily:FONT.type.robotoRegular, fontSize:FONT.size.font12, color:COLOR.warning}}>Credit</Text>
          <Text style={{fontFamily:FONT.type.poppinsBold, fontSize:FONT.size.font12, color:COLOR.dark}}>Rp. 25</Text>
        </View>
        <View style={styles.cardColorCenter}>
          <Text style={{fontFamily:FONT.type.robotoRegular, fontSize:FONT.size.font12, color:COLOR.danger}}>Credit</Text>
          <Text style={{fontFamily:FONT.type.poppinsBold, fontSize:FONT.size.font12, color:COLOR.dark}}>Rp. 25</Text>
        </View>
        <View style={styles.cardColorRight}>
          <Text style={{fontFamily:FONT.type.robotoRegular, fontSize:FONT.size.font12, color:COLOR.primary}}>Credit</Text>
          <Text style={{fontFamily:FONT.type.poppinsBold, fontSize:FONT.size.font12, color:COLOR.dark}}>Rp. 25</Text>
        </View>
      </View>
      <Text style={{textAlign:'center', fontFamily:FONT.type.robotoRegular, fontSize:FONT.size.font14, color:COLOR.dark}}>
        If you need price payment details, {"\n"}
        please scan the barcode below
      </Text>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', width:METRICS.screenWidth, marginTop:METRICS.screenWidth*20/365}}>
        <Image source={require('../../assets/img/barcode.png')} />
      </View>
      <Text style={{textAlign:'center', fontFamily:FONT.type.robotoRegular, fontSize:FONT.size.font14, color:COLOR.dark}}>
        2656148137193283627-236456
      </Text>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
    breadcrumb:{
        flexDirection:'row',
        padding:1,
        marginStart:FONT.size.font30,
        marginTop:FONT.size.font30,
        marginBottom:FONT.size.font15,
        alignItems:'center',
        // justifyContent:'space-between'
    },
    textBreadcrumb:{
        fontFamily:'Poppins-Bold',
        fontSize:FONT.size.font18,
        color:COLOR.primary, 
        marginStart:FONT.size.font20
    },
    containerHeader:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:FONT.size.font30,
      

    },
    textHeader:{
      fontFamily:'Poppins-Bold',
      fontSize:FONT.size.font14
    },
    list:{
      fontFamily:FONT.type.robotoRegular, 
      fontSize:FONT.size.font14
    },
    bold:{
      fontFamily:FONT.type.robotoBold, 
      fontSize:FONT.size.font14,
      color:COLOR.dark, 
    },
    amount:{
      fontFamily:FONT.type.robotoMedium, 
      fontSize:FONT.size.font14,
      color:COLOR.primary,
    },
    cardColorLeft:{
      alignItems:'center',
      width:METRICS.screenWidth*90/365,
      height:METRICS.screenWidth*50/365,
      backgroundColor:COLOR.lightWarning,
      paddingVertical:METRICS.screenWidth*9/365,
      padding:METRICS.screenWidth*15/365,
      borderRadius:20
    },
    cardColorCenter:{
      alignItems:'center',
      width:METRICS.screenWidth*90/365,
      height:METRICS.screenWidth*50/365,
      backgroundColor:COLOR.lightDanger,
      paddingVertical:METRICS.screenWidth*9/365,
      padding:METRICS.screenWidth*15/365,
      borderRadius:20
    },
    cardColorRight:{
      alignItems:'center',
      width:METRICS.screenWidth*90/365,
      height:METRICS.screenWidth*50/365,
      backgroundColor:COLOR.lightPrimary,
      paddingVertical:METRICS.screenWidth*9/365,
      padding:METRICS.screenWidth*15/365,
      borderRadius:20
    },
    cardContainer:{
      width:METRICS.screenWidth,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      paddingHorizontal:METRICS.screenWidth*30/365,
      marginVertical:METRICS.screenWidth*30/365,
    }
})