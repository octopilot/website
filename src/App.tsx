import type { Component } from 'solid-js';
import { MetaProvider } from '@solidjs/meta';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';

const App: Component<any> = (props) => {
  return (
    <MetaProvider>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </MetaProvider>
  );
};

export default App;
