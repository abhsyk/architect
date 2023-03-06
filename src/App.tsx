import { Layout } from './components/layouts';
import {
  About,
  Contact,
  Footer,
  Hero,
  Sidebar,
  Team,
} from './components/section';
import { UIContextProvider } from './context';

function App() {
  return (
    <UIContextProvider>
      <Layout>
        <Sidebar />
        <Hero />
        <About />
        <Team />
        <Contact />
        <Footer />
      </Layout>
    </UIContextProvider>
  );
}

export default App;
