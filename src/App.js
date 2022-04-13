import './App.css';
import CakeContainer from './components/CakeContainer';
import CocaColaContainer from './components/CocaColaContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <div className="App">
      <h1 className="headline">Hello Redux Cakes and Ice-cream Project</h1>
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <CocaColaContainer/>

  
    </div>
  );
}

export default App;
