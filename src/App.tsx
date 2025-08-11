import ExtensionsList from "./components/ExtensionsList.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <Header />
        <ExtensionsList />
      </div>
    </div>
  );
}

export default App;
