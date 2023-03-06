import { Layout } from './components/layouts';
import { About, Contact, Footer, Hero, Team } from './components/section';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Team />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
