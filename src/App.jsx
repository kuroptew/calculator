import Display from "./components/Display/Display.jsx";
import SingBoard from "./components/SingBoard/SingBoard.jsx";
import NumbersBoard from "./components/NumbersBoard/NumbersBoard.jsx";
import EqualButton from "./components/EqualButton/EqualButton.jsx";

function App() {
  return (
    <div className="container">
      <div  className={"panel-right"}>
        <Display/>
        <SingBoard/>
        <NumbersBoard/>
        <EqualButton/>
      </div>
    </div>
  )
}

export default App
