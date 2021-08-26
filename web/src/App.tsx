import Bubble from '@tchatozaure/shared/src/components/Bubble'
import MessageInput from '@tchatozaure/shared/src/components/MessageInput'

import * as styles from '@tchatozaure/shared/src/styles'

import './App.css'

function App() {
  
  return (
    <div className="App">
      <Bubble content="coucou" />
      <Bubble content="ça va ?" secondary />
      <MessageInput onSend={(msg) => console.log(msg)}/>
    </div>
  );
}

export default App;
