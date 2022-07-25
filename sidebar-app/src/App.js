import "./App.css";
import { Home } from "./Components/Home";
import { Modal } from "./Components/Modal";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <>
      <main className="main_container">
        <Sidebar></Sidebar>
        <Home></Home>
        <Modal></Modal>
      </main>
    </>
  );
}

export default App;
