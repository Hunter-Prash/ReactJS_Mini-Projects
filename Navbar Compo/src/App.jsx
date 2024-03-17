import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>

        {/* Wrap Routes around your Route components */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
