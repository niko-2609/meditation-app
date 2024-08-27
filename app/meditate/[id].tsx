import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

const MeditatePage = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter()
    return (
        <View className='flex-1 justify-center items-center'>
            <Text>MeditatePage</Text>
            <Text>{id}</Text>
            <Pressable 
            onPress={() => router.back()}>
                <Text>Go back</Text>
            </Pressable>
        </View>
    )
}

export default MeditatePage