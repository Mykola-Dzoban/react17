import './App.css'; 
import { Contacts } from './components/Contacts';
// import { Filters } from './components/Filters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Контакти
        </p>
      </header>
      <main>
        <Contacts />
      </main>
      
    </div>
  );
}

export default App;
