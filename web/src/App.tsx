import Bubble from '@tchatozaure/shared/src/components/Bubble'
import * as styles from '@tchatozaure/shared/src/styles'

import './App.css'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: styles.PRIMARY_COLOR }}>
          Tchatozaure
        </p>
        <Bubble content="coucou" />
        <Bubble content="ça va ?" secondary />
      </header>
    </div>
  );
}

export default App;
