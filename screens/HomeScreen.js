import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const navigation = useNavigation();
  const rstButton =()=>{
    navigation.navigate('OnBoarding')
  }
  const tkpButton =()=>{
    navigation.navigate('Takip')
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center space-y-4">
      <Text className="mt-3 mb-3 text-[21px]">Eisytech Akıllı Tarım Kontrol Uygulamasına Hoş Geldiniz!</Text>
      <TouchableOpacity onPress={rstButton} className="bg-red-500 p-3 rounded-full w-40 justify-center items-center">
        <Text className="text-white text-[17px]">Geri</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={tkpButton} className="bg-black mb-4 p-3 rounded-full w-40 justify-center items-center">
        <Text className="text-white text-[17px]">Bahçe 1</Text> 
      </TouchableOpacity>
    </SafeAreaView>
  
  )
}

