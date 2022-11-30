import { Alert, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Badge, Button, Card, Overlay, CheckBox } from "@rneui/themed";
import {METRICS, FONT, COLOR} from '../../style/index'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';



const Ambil = ({navigation}) => {
  const [tanggal, setTanggal] = useState(new Date());
  const [visibleTanggal, setVisibleTanggal] = useState(false);
  const [visibleFoto, setVisibleFoto] = useState(false);

  const toggleOverlay = () => {
    setVisibleTanggal(!visibleTanggal);
  };
  const toggleOverlayFoto = () => {
    setVisibleFoto(!visibleFoto);
  };

  return (
    <ScrollView style={{backgroundColor:COLOR.white, height:METRICS.screenHeight}}>
      <View style={styles.breadcrumb}>
        <Ionicons name="arrow-back-outline" size={METRICS.screenWidth * (24 / 365)} onPress={()=>navigation.goBack()} color={COLOR.primary} />
        <Text style={styles.textBreadcrumb}>Ambil</Text>
      </View>
      
      <View style={styles.containerForm}>
            <Input
                label={<View style={{flexDirection:'row'}}><Text style={{color:COLOR.dark, fontFamily:'Roboto-Bold', fontSize:FONT.size.font12}}>No. Container</Text><Text style={{color:COLOR.danger}}> *</Text></View>}
                placeholder='Nomor kontainer'
                labelStyle={{color:COLOR.dark, fontFamily:'Roboto-Medium', fontSize:FONT.size.font12}}
                placeholderTextColor={COLOR.secondary}
                inputStyle={{color:COLOR.dark, fontFamily:'Poppins-Regular', fontSize:FONT.size.font14}}
                inputContainerStyle={{borderColor:COLOR.secondary, borderBottomWidth:1}}
                selectionColor={COLOR.dark}
            />
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <Input
                    label="Seal"
                    placeholder='Nomor Seal'
                    labelStyle={{color:COLOR.dark, fontFamily:'Roboto-Medium', fontSize:FONT.size.font12}}
                    placeholderTextColor={COLOR.secondary}
                    inputStyle={{color:COLOR.dark, fontFamily:'Poppins-Regular', fontSize:FONT.size.font14}}
                    inputContainerStyle={{borderColor:COLOR.secondary, borderBottomWidth:1}}
                    containerStyle={{width:'48%'}}
                    selectionColor={COLOR.dark}
                    // style={{width:'20%'}}

                />

                <Input
                    label="Chasis"
                    placeholder='Nomor Chasis'
                    labelStyle={{color:COLOR.dark, fontFamily:'Roboto-Medium', fontSize:FONT.size.font12}}
                    placeholderTextColor={COLOR.secondary}
                    inputStyle={{color:COLOR.dark, fontFamily:'Poppins-Regular', fontSize:FONT.size.font14}}
                    inputContainerStyle={{borderColor:COLOR.secondary, borderBottomWidth:1}}
                    containerStyle={{width:'48%'}}
                    selectionColor={COLOR.dark}
                />
            </View>
            <Text style={{color:COLOR.dark, fontFamily:'Roboto-Bold', fontSize:FONT.size.font12, paddingLeft:10}}>Type</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-start', paddingBottom:15}}>
                <CheckBox
                center
                title='20 Feet'
                checked={true}
                checkedColor={COLOR.primary}
                size={32}
                />
                <CheckBox
                center
                title='40 Feet'
                checked={false}
                checkedColor={COLOR.primary}
                size={32}
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <Input
                    label="Lokasi"
                    placeholder='Lokasi'
                    labelStyle={{color:COLOR.dark, fontFamily:'Roboto-Medium', fontSize:FONT.size.font12}}
                    placeholderTextColor={COLOR.secondary}
                    inputStyle={{color:COLOR.dark, fontFamily:'Poppins-Regular', fontSize:FONT.size.font14}}
                    inputContainerStyle={{borderColor:COLOR.secondary, borderBottomWidth:1}}
                    containerStyle={{width:'48%'}}
                    selectionColor={COLOR.dark}
                    // style={{width:'20%'}}

                />

                <Input
                    label="Tujuan"
                    placeholder='Tujuan'
                    labelStyle={{color:COLOR.dark, fontFamily:'Roboto-Medium', fontSize:FONT.size.font12}}
                    placeholderTextColor={COLOR.secondary}
                    inputStyle={{color:COLOR.dark, fontFamily:'Poppins-Regular', fontSize:FONT.size.font14}}
                    inputContainerStyle={{borderColor:COLOR.secondary, borderBottomWidth:1}}
                    containerStyle={{width:'48%'}}
                    selectionColor={COLOR.dark}
                />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
                <Input
                        label="Tanggal"
                        placeholder='dd/mm/yyyy'
                        disabled={true}
                        labelStyle={{color:COLOR.dark, fontFamily:'Roboto-Medium', fontSize:FONT.size.font12}}
                        placeholderTextColor={COLOR.secondary}
                        inputStyle={{color:COLOR.dark, fontFamily:'Poppins-Regular', fontSize:FONT.size.font14}}
                        inputContainerStyle={{borderColor:COLOR.secondary, borderBottomWidth:1}}
                        containerStyle={{width:'60%'}}
                        selectionColor={COLOR.dark}
                    />
                <Button title="Atur" color={COLOR.lightSuccess} titleStyle={{color:COLOR.success}} onPress={toggleOverlay} />

            </View>
            <Overlay isVisible={visibleTanggal} onBackdropPress={toggleOverlay} overlayStyle={{padding:20, borderRadius:20}}>
                <DatePicker
                mode={'date'}
                date={tanggal}
                value={tanggal}
                maximumDate={tanggal}
                onDateChange={date => {
                    setTanggal(date);
                }}
                />
            </Overlay>
            <Card>
                <Card.Image source={{uri:'https://cf.shopee.co.id/file/0e5e3454c5654541a50469dfccb4fb12'}}>
                    {/* <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text> */}
                    {/* <Button
                    icon={<Ionicons name='code' color='#ffffff' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' /> */}
                </Card.Image>
                <Card.Divider/>
                <Button title="Upload Foto" color={COLOR.lightSuccess} titleStyle={{color:COLOR.success}} onPress={toggleOverlayFoto} />
                <Overlay isVisible={visibleFoto} onBackdropPress={toggleOverlayFoto} overlayStyle={{flexDirection:'row', padding:20, borderRadius:20, justifyContent:'space-around', alignItems:'center',  width:METRICS.screenWidth * (200 / 365), height:METRICS.screenWidth * (100 / 365)}}>
                    {/* <Card containerStyle={{justifyContent:'center',  width:METRICS.screenWidth * (150 / 365), height:METRICS.screenWidth * (130 / 365)}}> */}
                    
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={{
                            backgroundColor:COLOR.lightPrimary,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                            padding:15,
                            margin:14
                        }}>
                            <Ionicons name="camera-outline" size={30} color={COLOR.primary}></Ionicons>
                        </TouchableOpacity>
                        <Text style={styles.featureItemText}>Kamera</Text>
                    </View>
                        <Card.Divider/>
                        <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={{
                            backgroundColor:COLOR.lightWarning,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                            padding:15,
                            margin:14
                        }}>
                            <Ionicons name="image-outline" size={30} color={COLOR.warning}></Ionicons>
                        </TouchableOpacity>
                        <Text style={styles.featureItemText}>Galeri</Text>
                    </View>

                </Overlay>
            </Card>
            
            
            <Button title="Submit" color={COLOR.primary} buttonStyle={styles.btnSubmit} titleStyle={{color:COLOR.white, fontFamily:'Poppins-Medium'}} />
      </View>
        
    </ScrollView>
  )
}

export default Ambil

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
    containerForm:{
        padding: METRICS.screenWidth * (8 / 365),
        margin: METRICS.screenWidth * (20 / 365),
        elevation:2,
        // borderColor:COLOR.dark,
    },
    btnSubmit:{
        marginHorizontal:METRICS.screenWidth * (10 / 365),
        marginVertical:METRICS.screenWidth * (30 / 365),
        borderRadius:20,
    },
    featureItemText:{
        fontFamily:'Roboto-Medium',
        fontSize:14,
      },
    
})