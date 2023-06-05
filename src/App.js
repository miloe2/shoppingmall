import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './디테일';
import Event from './Event';
import ColorSchemesExample from './네비';
import data from "./data";
import Products from './상품정보';
import Cart from './Cart';



function App() {
  const [shoes] = useState(data);

  return (
    <>
      <Router>
      <ColorSchemesExample/>
        <Routes>
          <Route path='/' element={<Products shoes={shoes} />}/>
          <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
            <Route path='0' element={ <p>첫 주문시 양배추즙 서비스</p>} />

          </Route>
          <Route path='/event' element={<Event/>} >
            <Route path='one' element={ <p>첫 주문시 양배추즙 서비스</p>} />
            <Route path='two' element={<p>생일기념 쿠폰 받기</p>} />
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>

      </Router>

    </>
  );
}

export default App;
