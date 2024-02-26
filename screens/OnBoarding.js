import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

export default function OnBoarding() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Onboarding
                className="mx-auto container"
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: 
                           <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                                style={{ width: 200, height: 200 }} />
                        ,
                        title: 'EISYTECH APP TRYING',
                        subtitle: 'For eisytech mobile app development',
                    },
                ]}
            />
        </View>
    )
}
