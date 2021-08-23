import React from 'react'
import { Button } from 'react-native'

export const SendButton = () => (
    <Button title= "Send message" onPress={() => console.log('pressed')} />
)