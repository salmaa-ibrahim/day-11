import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import PageOne from './pages/page1'
import PageTwo from './pages/page2'
import ProductPage from './pages/detailsPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route path="PageOne"element={<PageOne />} />
          <Route path="PageTwo"element={<PageTwo />} />
          <Route path="/product/:id"element={<ProductPage/>} />


        </Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
