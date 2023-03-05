import { Layout } from './components/layouts';
import { About, Hero, Team } from './components/section';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Team />
    </Layout>
  );
}

export default App;
