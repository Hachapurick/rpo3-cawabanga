import "./assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerList from "./burgers/BurgerList";

function App() {
  return (
    <div>
      <Header />
      <BurgerList />
      <Footer />
    </div>
  );
}

export default App;
