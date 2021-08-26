import styled from "styled-components/native";
import { useMessageListContext } from "@tchatozaure/shared/src/business/useMessageListContext";
import Bubble from "@tchatozaure/shared/src/components/Bubble";
import MessageInput from "@tchatozaure/shared/src/components/MessageInput";
import Avatar from "@tchatozaure/shared/src/components/Avatar";
import { ScrollView, View } from "react-native";

type MessageRowType = {
  owner: boolean;
};

const MessageRow = styled.View<MessageRowType>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ owner }) => (owner ? "flex-end" : "flex-start")};
  padding: 0 1rem 0 1rem;
`;

const Conversation = () => {
  const { state, addMessage } = useMessageListContext();
  return (
    <View style={{ flex: 1, minHeight: "100vh" }}>
      <ScrollView>
        {state.messages?.map((message) => (
          <MessageRow owner={message.owner}>
            <Avatar imageSource={{ uri: message.avatar }} />
            <Bubble
              content={message.content}
              secondary={!message.owner || undefined}
            />
          </MessageRow>
        ))}
      </ScrollView>
      <MessageInput
        onSend={(msg) =>
          addMessage(state, {
            sentAt: new Date(),
            owner: true,
            content: msg,
            avatar:
              "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
          })
        }
      />
    </View>
  );
};

export default Conversation;
