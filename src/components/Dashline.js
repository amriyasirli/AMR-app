import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DashedLine from 'react-native-dashed-line';
import {METRICS, FONT, COLOR} from '../style/index'


const Dashline = () => {
  return (
    <View style={{ paddingHorizontal: FONT.size.font30, marginTop:FONT.size.font20, marginBottom:FONT.size.font10 }}>
        <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={COLOR.secondary} dashStyle={{ borderRadius: 8 }} />
    </View>
  )
}

export default Dashline

const styles = StyleSheet.create({})