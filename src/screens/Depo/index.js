import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Text, Input, Badge, Button, ListItem, Avatar } from "@rneui/themed";
import {METRICS, FONT, COLOR} from '../../style/index'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const list = [
  {
    name: 'IDR 10k',
    avatar_url: 'https://placeimg.com/640/480/tech',
    subtitle: "McDonal's",
    tanggal:'TEGU 06567823'
  },
  {
    name: 'IDR 5k',
    avatar_url: 'https://placeimg.com/640/480/arch',
    subtitle: 'Game',
    tanggal:'TEGU 06567823'
  },
  {
    name: 'IDR 10k',
    avatar_url: 'https://placeimg.com/640/480/any',
    subtitle: "McDonal's",
    tanggal:'TEGU 06567823'
  },
  {
    name: 'IDR 5k',
    avatar_url: 'https://placeimg.com/640/480/arch',
    subtitle: 'Game',
    tanggal:'TEGU 06567823'
  },
  {
    name: 'IDR 10k',
    avatar_url: 'https://placeimg.com/640/480/tech',
    subtitle: "McDonal's",
    tanggal:'TEGU 06567823'
  },
  {
    name: 'IDR 5k',
    avatar_url: 'https://placeimg.com/640/480/arch',
    subtitle: 'Top Up',
    tanggal:'TEGU 06567823'
  },
  
]

const Depo = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor:COLOR.white, height:METRICS.screenHeight}}>
      <View style={styles.breadcrumb}>
        <Ionicons name="arrow-back-outline" size={METRICS.screenWidth * (24 / 365)} onPress={()=>navigation.goBack()} color={COLOR.primary} />
        <Text style={styles.textBreadcrumb}>Stok Depo</Text>
      </View>
      <View style={{justifyContent:'center'}}>
        <View style={{backgroundColor:COLOR.lightSecondary, width:METRICS.screenWidth/1.2, height: METRICS.screenWidth * (120 / 365), borderRadius:20, marginHorizontal:30, padding:METRICS.screenWidth * (25 / 365)}}>
            <View style={{flexDirection:'column', justifyContent:'flex-start'}}>
                <Text style={{fontFamily:'Poppins-Medium', fontSize:FONT.size.font14}}>Balance</Text>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingEnd:METRICS.screenWidth * (30 / 365)}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontFamily:'Roboto-Black', fontSize:FONT.size.font24}}>IDR 100k</Text>
                        <Ionicons name="eye-outline" size={24} color={COLOR.secondary} style={{marginStart:METRICS.screenWidth * (15 / 365)}} />
                    </View>
                    <Badge 
                        value="IDR"
                        badgeStyle={{backgroundColor:COLOR.primary, paddingHorizontal:5}}
                        textStyle={{fontFamily:'Poppins-Bold'}}
                    />
                </View>
            </View>
        </View>
      </View>
      <View style={{justifyContent:'space-between', flexDirection:'row', paddingHorizontal:METRICS.screenWidth*(30/365), paddingTop:METRICS.screenWidth*(30/365)}}>
        <Text style={{fontFamily:'Poppins-Bold', fontSize:FONT.size.font14}}>Track History</Text>
        <Text style={{fontFamily:'Roboto-Regular', color:COLOR.secondary, fontSize:FONT.size.font12}}>View All</Text>
      </View>
        <View style={{paddingHorizontal:FONT.size.font15}}>
          {
            list.map((l, i) => (
              <ListItem key={i}>
                  <ListItem.Subtitle style={styles.itemTanggal}>{l.tanggal}</ListItem.Subtitle>
                <Avatar source={{uri: l.avatar_url}} size={METRICS.screenWidth*(40/365)} avatarStyle={{borderRadius:5}} />
                <ListItem.Content>
                  <ListItem.Subtitle style={styles.itemSubTitle}>{l.subtitle}</ListItem.Subtitle>
                  <ListItem.Title style={styles.itemTitle}>{l.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={24} color={COLOR.secondary} onPress={ () => alert('Success!')} />
              </ListItem>
            ))
          }
        </View>
    </ScrollView>
  )
}

export default Depo

const styles = StyleSheet.create({
    breadcrumb:{
        flexDirection:'row',
        padding:1,
        marginStart:FONT.size.font30,
        marginTop:FONT.size.font30,
        marginBottom:FONT.size.font15,
        width:METRICS.screenWidth * (130 / 365),
        alignItems:'center',
    },
    textBreadcrumb:{
        fontFamily:'Poppins-Bold',
        fontSize:FONT.size.font18,
        color:COLOR.primary,
        marginStart:20
    },
    itemTanggal:{
      fontFamily:FONT.type.robotoMedium, 
      fontSize:FONT.size.font14,
      color:COLOR.primary
    },
    itemTitle:{
      fontFamily:FONT.type.robotoMedium, 
      fontSize:FONT.size.font18,
      color:COLOR.dark

    },
    itemSubTitle:{
      fontFamily:FONT.type.robotoRegular, 
      fontSize:FONT.size.font14,
      color:COLOR.secondary
    }
})