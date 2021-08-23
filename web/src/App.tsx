import { SendButton, HeaderText } from '@tchatozaure/shared/src/components'
import * as styles from '@tchatozaure/shared/src/styles'

import './App.css'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: styles.PRIMARY_COLOR }}>
          Tchatozaure
        </p>
        <HeaderText />
        <SendButton />
      </header>
    </div>
  );
}

export default App;
