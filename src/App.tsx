import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // optional if you want to centralize layout styles

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <p>Welcome to DEMO Streaming</p>
      </main>
      <Footer />
    </div>
  );
}
