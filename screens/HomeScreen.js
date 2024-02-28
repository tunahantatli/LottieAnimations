import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const navigation = useNavigation();
  const rstButton =()=>{
    navigation.navigate('OnBoarding')
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View>
        <LottieView style={{width:350, height:300}} source={require('../assets/animations/confetti.json')} autoPlay loop={false} />
      </View>
      <Text className="mt-3 mb-3 text-[21px]">Wellcome to App</Text>
      <TouchableOpacity onPress={rstButton} className="bg-black p-3 rounded-full w-20 justify-center items-center">
        <Text className="text-white text-[17px]">Reset</Text> 
      </TouchableOpacity>
    </SafeAreaView>
  
  )
}

