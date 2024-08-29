import './App.css';
import MoodClicker from "./MoodClicker";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import SignUpForm from "./SignUpForm";
function App() {
  return (
    <div className="App">
<MoodClicker />
      <Counter />
        <ColorPicker />
        <SignUpForm />
    </div>
  );
}

export default App;
