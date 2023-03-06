import { Layout } from './components/layouts';
import {
  About,
  Contact,
  Footer,
  Hero,
  Sidebar,
  Team,
} from './components/section';

function App() {
  return (
    <Layout>
      <Sidebar />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
