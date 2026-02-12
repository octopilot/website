import type { Component } from 'solid-js';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';

const App: Component<any> = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default App;
