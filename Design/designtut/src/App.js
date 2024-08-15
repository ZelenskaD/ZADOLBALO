import './App.css';
import Dice from "./Dice.js"
function App() {
  return (
    <div>
  <Dice numDice={4} maxVal = {10}/>
      <Dice numDice={6} title="Roll Me!"/>

    </div>
  );
}

export default App;
