import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text } from "@rneui/themed";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatGrid } from 'react-native-super-grid';
import {METRICS, FONT, COLOR} from '../../style/index'

const BASE_URI = '../../assets/img/poster.png';

export default function Home({navigation}) {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    
  ]);
  return (
    <ScrollView style={{backgroundColor:COLOR.white, height:METRICS.screenHeight}}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.welcomeText}>Hello!</Text>
            <Text style={styles.nameText}>Yassirli Amri</Text>
          </View>
          {/* <Ionicons name="" size={24} color="#000" /> */}
          <Ionicons name="notifications" size={30} color={COLOR.dark}></Ionicons>
      </View>
        <Image source={require('../../assets/img/poster.png')} resizeMode='stretch' style={styles.imageHero} />
      <Text style={styles.featuresText}>Feature</Text>
      <View style={styles.featureContainer}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Depo')} style={{
            backgroundColor:COLOR.lightSuccess,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="albums" size={30} color={COLOR.success}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Depo</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Ambil')} style={{
            backgroundColor:COLOR.lightWarning,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="duplicate" size={30} color={COLOR.warning}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Ambil</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightPrimary,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="navigate" size={30} color={COLOR.primary}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Antar</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightDanger,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="link" size={30} color={COLOR.danger}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Tarik</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightWarning,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="layers" size={30} color={COLOR.warning}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Loading</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightPrimary,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="cloud-download" size={30} color={COLOR.primary}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Download</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightDanger,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="bar-chart" size={30} color={COLOR.danger}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Grafik</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightWarning,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="help-circle" size={30} color={COLOR.warning}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>Petunjuk</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity style={{
            backgroundColor:COLOR.lightSuccess,
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            margin:14
          }}>
            <Ionicons name="information-circle" size={30} color={COLOR.success}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.featureItemText}>About</Text>
        </View>
      </View>
      <Text style={styles.featuresText}>Pengumuman</Text>
      <View style={{flex:1, flexDirection:'column', backgroundColor: COLOR.light, justifyContent:'center', alignItems:'center', marginHorizontal:30, padding:10, borderRadius:10}}>
          <Text style={styles.labelTitle}>No Announcement</Text>
          <Text style={styles.label}>Tidak ada pengumuman saat ini!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer:{
    flex:1,
    flexDirection:'row',
    paddingHorizontal:30,
    marginTop:59,
    marginBottom:20,
    justifyContent:'space-between',
    alignItems:'center',
    // borderColor:'#000',
    // borderWidth:1
  },
  welcomeText:{
    fontSize:FONT.size.font18,
    fontFamily:'Poppins-Bold',
  },
  nameText:{
    fontSize:14,
    fontFamily:'Poppins-Medium',
  },
  imageHero:{
    width:'88%',
    height:METRICS.screenWidth*90/365,
    marginHorizontal:30
  },
  featuresText:{
    fontSize:18,
    fontFamily:'Poppins-Bold',
    marginTop:30,
    // marginBottom:0,
    marginLeft:30
  },
  featureContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    // alignItems:'flex-start',
    marginHorizontal:20
  },
  featureItem:{
    // flex:2,
    backgroundColor:'rgba(142, 68, 173, 0.2)',
    // opacity:0.2,
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    margin:14
  },
  featureItemText:{
    fontFamily:'Roboto-Medium',
    fontSize:14,
  },
  labelTitle:{
    fontFamily:'Roboto-Bold',
    fontSize:14,
  },
  label:{
    color:COLOR.secondary,
    fontFamily:'Roboto-Medium',
    fontSize:14,
  },

  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 30,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});