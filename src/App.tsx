import { ExtensionsList } from "./components/ExtensionsList";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <Header />
        <ExtensionsList />
      </div>
    </div>
  );
}
