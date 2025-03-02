import React from 'react'
import Nav from './navbar/Nav'
import Body from './body/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer/Footer'
import ShopCategory from './body/bottom/mainbody/box/ShopCategory'
import Items from './body/bottom/mainbody/box/Items'
import StorageHome from './store/StorageHome'

const App = () => {
  return (
    <>
      <div>
        <StorageHome>
        <BrowserRouter>
        <Nav/>
            <Body />
            <Routes>
              <Route path="/" element={<ShopCategory />} />
              <Route path="/:category" element={<ShopCategory />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </StorageHome>
      </div>
    </>
  )
}

export default App;
