import styled from 'styled-components';
import { MessageListContextProvider } from "@tchatozaure/shared/src/business/useMessageListContext";

import Header from './components/Header';

import Conversation from "./pages/conversation";

const Body = styled.div`
  height: 100vh;
`

const App = () => (
  <Body>
    <Header />
    <MessageListContextProvider>
        <Conversation />
    </MessageListContextProvider>
  </Body>
)

export default App
