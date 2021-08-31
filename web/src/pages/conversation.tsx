import { useRef, useEffect } from 'react'
import nativeStyled from 'styled-components/native';
import styled from "styled-components";

import { useMessageListContext } from "@tchatozaure/shared/src/business/useMessageListContext";

import Bubble from "@tchatozaure/shared/src/components/Bubble";
import MessageInput from "@tchatozaure/shared/src/components/MessageInput";
import Avatar from "@tchatozaure/shared/src/components/Avatar";

const Tchat = styled.div`
  margin-top: 50px;
  padding: 0 10vw;
  width: 80vw;
  max-height 80vh;
  overflow: scroll;
`

const BubbleStyled = nativeStyled(Bubble)`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  width: fit-content;
`

const MessageInputStyled = nativeStyled(MessageInput)`
  margin: 30px 10vw;
  position: absolute;
  bottom: 0;
  width: 80vw;
`

type MessageRowType = {
  owner: boolean;
};

const MessageRow = styled.div<MessageRowType>`
  display: flex;
  flex-direction: ${({ owner }) => (owner ? "row-reverse" : "row")};
  justify-content: flex-start;
  padding: 0 1rem 0 1rem;
`;

const Conversation = () => {
  const tchatRef = useRef<null | HTMLDivElement>(null);
  const { state, addMessage } = useMessageListContext();

  const onSend = (msg: string) => {
    addMessage(state, {
      sentAt: new Date(),
      owner: true,
      content: msg,
      avatar:
        "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
    })
      
  }

  useEffect(() => {
    if (tchatRef?.current) {
      tchatRef.current.scrollTo(0, tchatRef.current.scrollHeight);
    }
  }, [state.messages])


  return (
    <>
      <Tchat ref={tchatRef}>
        {state.messages?.map((message) => (
          <MessageRow owner={message.owner}>
            <Avatar imageSource={{ uri: message.avatar }} />
            <BubbleStyled
              content={message.content}
              secondary={!message.owner || undefined}
            />
          </MessageRow>
        ))}
      </Tchat>

      <MessageInputStyled onSend={onSend} />
    </>
  );
};

export default Conversation;
