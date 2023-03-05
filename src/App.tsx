import { Layout } from './components/layouts';
import { About, Contact, Hero, Team } from './components/section';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Team />
      <Contact />
    </Layout>
  );
}

export default App;
