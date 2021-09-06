import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

import Bubble from '@tchatozaure/shared/src/components/Bubble';
import MessageInput from '@tchatozaure/shared/src/components/MessageInput';
import Avatar from '@tchatozaure/shared/src/components/Avatar';
import {useMessageListContext} from '@tchatozaure/shared/src/business/useMessageListContext';

const ContainerMessages = styled(ScrollView)`
  flex: 0.9;
`;

type MessageRowType = {
  owner: boolean;
};

const MessageRow = styled.View<MessageRowType>`
  flex-direction: ${({owner}) => (owner ? 'row-reverse' : 'row')};
  justify-content: flex-start;
  padding: 0 10px;
`;

const BubbleStyled = styled(Bubble)`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const MessageInputStyled = styled(MessageInput)`
  flex: 0.1;
  padding: 15px;
`;

const Conversation = () => {
  const tchatRef = useRef<null | ScrollView>(null);
  const {state, addMessage} = useMessageListContext();

  const onSend = (msg: string) => {
    addMessage(state, {
      sentAt: new Date(),
      owner: true,
      content: msg,
      avatar:
        'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png',
    });
  };

  return (
    <>
      <ContainerMessages
        ref={tchatRef}
        onContentSizeChange={() => tchatRef?.current?.scrollToEnd()}>
        {state.messages?.map(message => (
          <MessageRow owner={message.owner}>
            <Avatar imageSource={{uri: message.avatar}} />
            <BubbleStyled
              content={message.content}
              secondary={!message.owner || undefined}
            />
          </MessageRow>
        ))}
      </ContainerMessages>
      <MessageInputStyled displayButtonLabel={false} onSend={onSend} />
    </>
  );
};

export default Conversation;
