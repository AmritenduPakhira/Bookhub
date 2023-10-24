import React,{useState} from 'react';
import { AppProvider } from './context.';
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './Components/BookList/BookList';
import BookDetails from './Components/BookDetails/Bookdetails';
import Login from './Pages/Login/Login';

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

const handleLogin=(username,password) =>{
  if(username==="amrit" && password==="amrit"){
    setIsLoggedIn(true);
  }else{
    alert("username password is not correct");
    setIsLoggedIn(false);
  }
}
  return (
    <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedin? <Navigate to="/home" /> :<Login onLogin={handleLogin}/>}/>
        <Route path="/home" element={isLoggedin? <Home />:<Navigate to='/'/> } />
          <Route path="/about" element={isLoggedin? <About />:<Navigate to='/'/>} />          
          <Route path="/book" element={isLoggedin?<BookList />:<Navigate to='/'/>} />
          <Route path="/book/:id" element={isLoggedin?<BookDetails />:<Navigate to='/'/>} />
        
      </Routes>

    </BrowserRouter>
  </AppProvider>
  );
}

export default App;
