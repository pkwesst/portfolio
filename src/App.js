import AboutMe from "./components/AboutMe.js";
import Footer from "./components/Footer.js";
import GlobalStyle from "./components/GolobalStyle.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Project from "./components/Project.js";

function App() {
  return (
    <div className="App" id="2">
      <GlobalStyle />
      <Header />
      <Main />
      <Project />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
