import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
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
            <TouchableOpacity className="p-5 bg-transparent mr-2" {...props}>
                <Text className='text-purple-600'>Bitti</Text>
            </TouchableOpacity>
        )
    }

    const nextButton = ({ ...props }) => {
        return (
            <TouchableOpacity className="p-5 bg-transparent mr-2" {...props}>
                <Text className="text-black">Sıradaki</Text>
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
                            <View>
                                <LottieView style={{ width: 300, height: 400 }} source={require('../assets/animations/farmer.json')} autoPlay loop />
                            </View>
                        ,
                        title: <Image source={require('../assets/elog.png')} style={{ width: 200, height: 50, resizeMode: 'contain' }} />,
                        subtitle: 'Sulamayı, hava durumunu ve sensör verilerini anlık kontrol et.',
                        subTitleStyles: { color: 'darkgreen' }
                    },
                    {
                        backgroundColor: 'white',
                        image:
                            <View>
                                <LottieView style={{ width: 300, height: 400 }} source={require('../assets/animations/chart.json')} autoPlay loop />
                            </View>
                        ,
                        title: <Image source={require('../assets/elog.png')} style={{ width: 200, height: 50, resizeMode: 'contain' }} />,
                        subtitle: 'Verimli Tarım İçin Akıllı Takip',
                        subTitleStyles: { color: 'darkgreen' }
                    },
                    {
                        backgroundColor: '#fff',
                        image:
                            <View>
                                <LottieView style={{ width: 300, height: 400 }} source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ,
                        title: <Image source={require('../assets/elog.png')} style={{ width: 200, height: 50, resizeMode: 'contain' }} />,
                        subtitle: 'Akıllı teknolojiyle daha hızlı, daha verimli ve daha kolay tarım!',
                        subTitleStyles: { color: 'darkgreen' }
                    },
                ]}
            />
        </View>
    )
}
