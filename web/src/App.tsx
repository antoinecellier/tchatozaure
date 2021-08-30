import nativeStyled from 'styled-components/native';
import styled from 'styled-components';

import Bubble from '@tchatozaure/shared/src/components/Bubble'
import MessageInput from '@tchatozaure/shared/src/components/MessageInput'

import Header from './components/Header';

const Body = styled.div`
  height: 100vh;
`

const Tchat = styled.div`
  bottom: 0;
  padding: 0 10vw;
  width: 80vw;
  margin: 30px 0;
`

const BubbleStyled = nativeStyled(Bubble)`
  margin-bottom: 20px;
  width: fit-content;
`

const App = () => (
  <Body>
    <Header />
    <Tchat>
      <BubbleStyled content="coucou" />
      <BubbleStyled content="ça va ?" secondary />
      <MessageInput onSend={(msg) => console.log(msg)}/>
    </Tchat>
  </Body>
)

export default App;
