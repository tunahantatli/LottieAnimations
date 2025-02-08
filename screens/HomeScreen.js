import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const navigation = useNavigation();
  const rstButton = () => {
    navigation.navigate('OnBoarding')
  }
  const tkpButton = () => {
    navigation.navigate('Takip')
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center space-y-4">
      <Text className="mt-3 mb-3 text-xl font-bold">Eisytech Akıllı Tarım Kontrol Uygulamasına Hoş Geldiniz!</Text>
      <Text className='mt-4 mb-2 text-xl font-bold text-stone-700'>Bahçeler</Text>
      <View className="flex flex-row self-center space-x-2">
      <TouchableOpacity onPress={tkpButton} className="bg-black p-3 rounded-full w-28 justify-center items-center">
        <Text className="text-white text-[17px]">Bahçe 1</Text>
      </TouchableOpacity>
      </View>

      
      <View className="flex flex-row items-end justify-end space-x-4 mb-2 mt-12">
        <TouchableOpacity onPress={rstButton} className="bg-red-500 p-3 rounded-full w-28 justify-center items-center">
          <Text className="text-white text-[17px]">Geri</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}

