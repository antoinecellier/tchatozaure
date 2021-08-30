import React, { useState } from 'react'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import * as styles from '../../styles'

const Container = styled.View`
    flex: 1;
    flex-direction: row;
`

const Input = styled.TextInput`
    flex: 5;
    padding: 10px;
    border: 1px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    borderColor: ${styles.SECONDARY_COLOR}
`

const TouchableOpacity = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justifyContent: center;
    padding: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    backgroundColor: ${styles.PRIMARY_COLOR}
`

const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
` 

type MessageFormProps = {
    onSend: (message: string) => void;
    displayButtonLabel?: boolean;
}

const MessageInput = ({ onSend, displayButtonLabel = true }: MessageFormProps) => {
    const [message, onChangeMessage] = useState("");

    return (
        <Container>
            <Input
                onChangeText={onChangeMessage} 
                placeholder="Enter your message" 
            />
            <TouchableOpacity onPress={() => onSend(message)}>
                <FontAwesomeIcon icon={ faPaperPlane } color="#fff" style={{ marginRight: 5 }} />
                {displayButtonLabel && <ButtonText>Send</ButtonText>}
            </TouchableOpacity>
        </Container>
    )
}

export default MessageInput