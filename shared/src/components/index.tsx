import React from 'react'
import { Button } from 'react-native'
import AvatarComponent from './Avatar'

export const SendButton = () => (
    <Button title= "Send messages" onPress={() => console.log('pressed')} />
)

export const Avatar = AvatarComponent