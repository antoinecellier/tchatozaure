import React from 'react'
import { Button } from 'react-native'

export const SendButton = () => (
    <Button title= "Send messages" onPress={() => console.log('pressed')} />
)