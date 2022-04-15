import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CocaColaContainer from "./components/CocaColaContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
   return (
      <div className="App">
          <h1 style={{color : 'green', textAlign : 'center'}}>Redux React-redux practice</h1>
         <h2 className="headline">Hello Redux Cakes and Ice-cream Project</h2>
         {/* <CakeContainer />
         <HooksCakeContainer />
         <IceCreamContainer />
         <CocaColaContainer />
         <NewCakeContainer />

         <p>Item</p>
         <ItemContainer/> */}

         <UserContainer/>
      </div>
   );
}

export default App;
