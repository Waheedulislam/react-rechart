import './App.css';
import MyLineChart from './Components/MyLineChart/MyLineChart';
import SpecialChart from './Components/SpecialChart/SpecialChart';
import SpringAnimation from './Components/SpringAnimation/SpringAnimation';

function App() {
  return (
    <div className="App">
      <SpringAnimation></SpringAnimation>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>

    </div>
  );
}

export default App;
