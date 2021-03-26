import ThemeContextProvider from "./contexts/ThemeContext";
import HobbieList from "./HobbieList";
import Nav from "./Nav";
import Toggle from "./Toggle";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Nav />
        <HobbieList />
        <Toggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
