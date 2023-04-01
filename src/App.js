import './App.css';

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Firstsection from './components/Firstsection/Firstsection';
import Secondsection from './components/Secondsection/Secondsection';
import Thirdsection from './components/Thirdsection/Thirdsection';
import Footer from './components/Footer/Footer';
const App=() => {
  return (
    
    <><Router>
      <Navbar />
    </Router>
    <Firstsection />
    <Secondsection/>
    <Thirdsection/>
    <Footer/>
    </>
    
  );
}

export default App;
