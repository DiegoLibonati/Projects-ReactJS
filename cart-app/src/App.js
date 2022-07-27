import "./App.css";
import { CartContainer } from "./components/CartContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <CartContainer></CartContainer>
      </main>
    </>
  );
}

export default App;
