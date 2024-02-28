import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
export default function OnBoarding() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Onboarding
                className="mx-auto container"
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: 
                           <View>
                              <LottieView source={require('../assets/animations/boost.json')} autoPlay loop />
                           </View>
                        ,
                        title: 'EISYTECH APP TRYING',
                        subtitle: 'For eisytech mobile app development',
                    },
                ]}
            />
        </View>
    )
}
