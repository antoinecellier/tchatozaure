import styled from "styled-components/native";
import { MessageListContextProvider } from "@tchatozaure/shared/src/business/useMessageListContext";

import * as styles from "@tchatozaure/shared/src/styles";

import "./App.css";
import Conversation from "./pages/conversation";

function App() {
  return (
    <MessageListContextProvider>
        <Conversation />
    </MessageListContextProvider>
  );
}

export default App;
