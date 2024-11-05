import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import ProductPage from "./Components/Products/Products.jsx";
import ItemDetail from './Components/ItemDetail/ItemDetail.jsx';
import Account from './Components/Account/Account.jsx';


function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path='/account' element={<Account/>}/>
                    <Route path='/products/:productId' element={<ItemDetail/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
