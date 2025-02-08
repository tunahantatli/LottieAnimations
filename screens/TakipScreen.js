import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import HumHeat from "../components/HumHeat";
import Well from "../components/Well";
import Pump from "../components/Pump";
import Valve from "../components/Valve";

const TakipScreen = () => {
    const navigation = useNavigation();
    const rstButton =()=>{
      navigation.navigate('Home')
    }
  return (
    <ScrollView className="flex flex-col bg-gray-100 pr-4 pl-4 pt-4 pb-20">
      <View className="space-y-4">
        {/* Sıcaklık ve Nem */}
        <HumHeat sensorId="Bahce1" />

        {/* Kuyu Seviyesi */}
        <Well wellId="Havuz1" />

        {/* Pompa Durumu */}
        <Text className="text-2xl font-bold text-center mt-4 mb-2">Pompa Durumu</Text>
        <Pump pumpId="Pompa1" />

        {/** Vana Durumu */}
        <Text className="text-2xl font-bold text-center mt-4 mb-2">Vana Durumu</Text>
        <Valve valveId="Vana1" />
        <Valve valveId="Vana2" />
        <Valve valveId="Vana3" />
        <Valve valveId="Vana4" />
      </View>
      <View className="flex flex-row items-center justify-end p-4 mt-2 mb-8">
        <TouchableOpacity onPress={rstButton} className="bg-black p-3 rounded-full w-28 justify-center items-center mb-4">
                <Text className="text-white text-lg">Geri</Text> 
              </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TakipScreen;
