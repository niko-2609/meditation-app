import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"


import beachImage from "@/assets/meditation-images/beach.webp"
import CustomButton from '@/components/shared/CustomButton'
import { useRouter } from 'expo-router'
import AppGradient from '@/components/shared/AppGradient'



const index = () => {

    const router = useRouter()
    return (
        <View className="flex-1">
          <StatusBar/>
            <ImageBackground
                source={beachImage}
                resizeMode='cover'
                className='flex-1 w-full'
            >
             <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
                    <SafeAreaView className='flex-1 px-1 justify-between mx-5 my-8'>
                        <View>
                            <Text className='text-center text-white font-bold text-4xl'>
                                Simple Meditation
                            </Text>
                            <Text className='text-center text-white mt-3 text-2xl'>
                                Simplifying Meditation for Everyone
                            </Text>
                        </View>
                            <CustomButton 
                                title="Get started" 
                                onPress={() => router.push('/nature-meditate')}
                            />
                        <StatusBar style="light" />
                    </SafeAreaView>
               </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default index