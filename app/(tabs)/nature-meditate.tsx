import { View, Text, FlatList, Pressable, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppGradient from '@/components/shared/AppGradient'
import { LinearGradient } from 'expo-linear-gradient'

import { MEDITATION_DATA } from '@/constants/MeditationData'
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { useRouter } from 'expo-router'

const NatureMeditate = () => {
    const router = useRouter()
    const [ meditationImages, setMeditationImages ] = useState<any>([])
    useEffect(() => {
        setMeditationImages(MEDITATION_IMAGES)
    },[])
    return (
        <View className='flex-1'>
            <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <View className='flex-1 p-4 gap-4'>
                    <View className='mb-2'>
                        <Text className='text-left text-gray-200 text-4xl font-bold mb-3'>Welcome Steven</Text>
                        <Text className='text-indigo-100 text-xl font-medium'>Start your meditation practice today</Text>
                    </View>
                    <View>
                        <FlatList
                            data={MEDITATION_DATA}
                            keyExtractor={(item: any) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => { router.push(`/meditate/${item.id}`)}}
                                    className='h-48 my-3 rounded-md overflow-hidden'
                                >
                                    <ImageBackground
                                        source={meditationImages[item.id-1]}
                                        resizeMode='cover'
                                    >
                                        <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} className='items-center h-full justify-center w-full'>
                                            <Text className='text-white text-xl font-semibold text-center'>{item.title}</Text>
                                        </LinearGradient>
                                    </ImageBackground>
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
            </AppGradient>

        </View>
    )
}

export default NatureMeditate


