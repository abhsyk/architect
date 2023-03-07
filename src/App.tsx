import { Layout } from './components/layouts';
import { UIContextProvider } from './context';

function App() {
  return (
    <UIContextProvider>
      <Layout />
    </UIContextProvider>
  );
}

export default App;
