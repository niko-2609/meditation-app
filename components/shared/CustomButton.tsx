import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress: () => void,
    title: string,
    textStyles?: string,
    containerStyles?: string

}

const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            className={`justify-center items-center bg-white rounded-xl min-h-[62px] ${containerStyles}`}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Text className={`text-primary font-semibold text-lg`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton