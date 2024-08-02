import Contato from "./pages/contato";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Projetos from "./pages/projetos";


function App() {
  return (
    <div>
      <section id="section1">
        <Home />
      </section>
      <section id="section2">
        <Projetos />
      </section>
      <section id="section3">
        <Profile />
      </section>
      <section id="section4">
        <Contato />
      </section>
    </div>
  );
}

export default App;
