import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const AppGradient = ({ children, colors }: { children: React.ReactNode, colors: string[] }) => {
    return (
        <LinearGradient className='flex-1' colors={colors}>
            <SafeAreaView className='flex-1 px-20 py-12'>
                {children}
            </SafeAreaView>
        </LinearGradient>
    )
}

export default AppGradient