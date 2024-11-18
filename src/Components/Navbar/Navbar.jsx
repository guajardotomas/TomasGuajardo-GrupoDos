import './Navbar.css'
import {Link} from "react-router-dom";
export default function Navbar() {
    const Medusa = './medusa_black.png'
    const Cart ='./cart.png'
    return (
        <header className="nav">
            <div className="w-12">
                <ul>
                    <img src={Medusa} alt="Logo" id="home"/>
                </ul>
            </div>
            <nav>
                <ul className="flex items-center justify-around gap-12">
                    <li className="font-bold hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white   uppercase"><a href="#home" id='home'>
                        <Link to="/Home">Home</Link></a>
                    </li>
                    <li className="font-bold  hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white  uppercase"><a href="#home"id='Tienda'>
                        <Link to="/Products">Products</Link></a>
                    </li>
                    <li className="font-bold  hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white  uppercase"><a href="#">
                        <Link to="/Contact">Contact</Link></a>
                    </li>
                    <li className="font-bold  hover:bg-slate-300 transition-all ease-linear px-2 py-1 rounded-xl hover:text-white  uppercase"><a href="#" id="Account">
                        <Link to="/Account">Account</Link></a>
                    </li>
                </ul>
            </nav>
            <div className='flex justify-center items-center pr-4'>
                <div className='relative py-1'>
                    <div className='top-0 absolute left-3'>
                        <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>3</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>

        </header>
    )
}
