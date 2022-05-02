import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Home from './pages/Home';
import PageRoute from './routes/PageRoute';

const App = () => {
  return (
    <>
      <Header />
      <PageRoute />
      <Footer />
    </>
  );
};

export default App;
