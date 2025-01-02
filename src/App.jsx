import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import Registration from './Pages/Registration';
const App = () => {
  return (
    <div>
      <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link to='/index' className='navbar-brand'>Logo</Link>
          <div className='ml-auto'>
            <ul className='navbar nav'>
              <li className='nav-link'><Link to='/Home'>Home</Link></li>
              <li className='nav-link'><Link to='/about'>About</Link></li>
              <li className='nav-link'><Link to='/services'>Services</Link></li>
              <li className='nav-link'><Link to='/Contact'>Contact</Link></li>
              <li className='nav-link'><Link to='/Login'>Login</Link></li>
              <li className='nav-link'><Link to='/Sign'>Sign details</Link></li>
              <li className='nav-link'><Link to='/Registration'>Registration</Link></li>
              
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Sign' element={<Sign/>}/>
          <Route path='/Registration' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
