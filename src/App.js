import './App.css';
import MyLayout from "./Layout/MyLayout";
import MyContext from "./context";
import {useState} from "react";
import {Modal} from "antd";
import Login from "./Login/Login";


function App() {
    const [modal1Open, setModal1Open] = useState(false);

    return (

        <Login/>
    )

    return (
    <div className="App">
        <MyContext.Provider value={setModal1Open} >
            <MyLayout />
        </MyContext.Provider >
        <Modal
            title="20px to Top"
            style={{
                top: 20,
            }}
            open={modal1Open}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
        >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
        </Modal>
    </div>
  );
}

export default App;
