import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
export default function OnBoarding() {
    const navigation = useNavigation();
    const handleDone = () => {
        navigation.navigate('Home')
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity className="p-5 bg-black  rounded-full mr-2" {...props}>
                <Text className='text-white'>Bitti</Text>
            </TouchableOpacity>
        )
    }

    const nextButton = ({ ...props }) => {
        return (
            <TouchableOpacity className="p-5 bg-black  rounded-full mr-2" {...props}>
                <Text className="text-white">Sıradaki</Text>
            </TouchableOpacity>
        )
    }

    const skipButton = ({ ...props }) => {
        return (
            <TouchableOpacity className="p-5 bg-transparent ml-2" {...props}>
                <Text className="text-black">Atla</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View className="flex-1 justify-center">
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                NextButtonComponent={nextButton}
                SkipButtonComponent={skipButton}
                className="mx-auto container"
                pages={[
                    {
                        backgroundColor: 'white',
                        image:
                            <View >
                                <LottieView style={{ 'width': 300, 'height': 400 }} source={require('../assets/animations/farmer.json')} autoPlay loop />
                            </View>
                        ,
                        title: 'EISYTECH APP TRY Vol-1',
                        subtitle: 'For eisytech mobile app development',
                        titleStyles: { color: 'red' },
                        subTitleStyles: { color: 'darkgreen' }
                    },
                    {
                        backgroundColor: 'white',
                        image:
                            <View >
                                <LottieView style={{ 'width': 300, 'height': 400 }} source={require('../assets/animations/chart.json')} autoPlay loop />
                            </View>
                        ,
                        title: 'EISYTECH APP TRY Vol-1',
                        subtitle: 'For eisytech mobile app development',
                        titleStyles: { color: 'red' },
                        subTitleStyles: { color: 'darkgreen' }
                    },
                    {
                        backgroundColor: '#fff',
                        image:
                            <View >
                                <LottieView style={{ 'width': 300, 'height': 400 }} source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ,
                        title: 'EISYTECH APP TRY Vol-1',
                        subtitle: 'For eisytech mobile app development',
                        titleStyles: { color: 'red' },
                        subTitleStyles: { color: 'darkgreen' }
                    },
                ]}
            />
        </View>
    )
}
