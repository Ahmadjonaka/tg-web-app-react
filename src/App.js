import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        tg.close()
    }

  return (
    <div className="App">
        <h1>Hello world</h1>
        <button onClick={onClose}>Yopish</button>
    </div>
  );
}

export default App;