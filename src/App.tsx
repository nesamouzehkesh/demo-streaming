import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';

export default function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}