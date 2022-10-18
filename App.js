import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View style= {{backgroundColor: '#FBF8F1', height: '100%'}}>
    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text> (Kosong masih belum ada item) </Text>
    </View>

    <View style= {{backgroundColor: '#AD8B73', height: '10%', justifyContent: 'space-between', flexDirection: 'row'}}>
    <View style= {{backgroundColor: '#F9FFA4', width: 30, height: 30, marginLeft: 20, marginVertical: 15}} />
    <View style= {{backgroundColor: '#E0DECA', width: 30, height: 30, marginVertical: 15}} />
    <View style= {{backgroundColor: '#E0DECA', width: 30, height: 30, marginRight: 20, marginVertical: 15}} />
    </View>
    </View>
  );
}