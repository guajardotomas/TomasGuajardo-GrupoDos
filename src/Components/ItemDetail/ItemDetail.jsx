import { useEffect, useState } from "react"
import { getProductById } from '../../Data/asyncMock';
import { useParams } from "react-router-dom";

export default function ItemDetail(){

const { productId } = useParams();
const [ product, setProduct ] = useState ({product: 0, stock: 0});
const [ Loading, setLoading ] = useState(true);

useEffect(()=>{
    getProductById(productId).then((data) =>{
        setProduct(data);
        setLoading(false);
    });
},[productId]);

const [ quantity, setQuantity ] = useState(1);

const incrementQuantity = () =>{
    if (quantity < product.stock){
        setQuantity( quantity + 1 );
    }
};

const decrementQuantity = ()=>{
    if ( quantity > 1){
        setQuantity( quantity - 1 )
    }
}

const precioTotal = product.price * quantity;

if (Loading){
    return <div className="py-20px"><p>Loading...</p></div>;
}

if (!product){
    return <div>product not found</div>;
}

    return(
        <div className="container mx-auto max-w-1170px">
            <div className="grid grid-cols-2 pt-50px pb-100">
                <div className="span-col-1 pr-30px">
                   <img src={product.img} alt="Imagen del producto" className=" rounded-20px pt-20 lg:h-full" />
                </div>
                <div className="px-10">
                   <h1 className="text-45px font-medium uppercase pt-52">{product.name}</h1>
                   <p className="text-20px">{product.description}</p>
                   <div>
                    <h3>Tallas Disponibles</h3>
                    <ul className="flex">
                        {product.sizes.map((size,index)=>(
                            <li key={index} className='text-[20px] my-[20px] border-[1px] w-[50px] flex justify-center mx-[10px] rounded-lg'>{size}</li>
                        ))}
                    </ul>
                   </div>
               <p className="text-20px text-green-700 font-bold">Stock: {product.stock}</p>

               <div className="flex">
                    <button onClick={decrementQuantity} className='rounded-[5px] hover:bg-slate-300 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'>-</button>
                    <p className="text-20px px-10">{quantity}</p>
                    <button onClick={incrementQuantity} className='rounded-[5px] hover:bg-slate-300 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'>+</button>
                </div>
                   <p className="text-blue-500 font-bold">Precio: ${product.price} por unidad</p>
                   <p className="text-20px">Precio Total: ${precioTotal}</p>
                   <button className='bg-blue-500 text-[#ffffff] font-bold text-[15px] px-[20px] py-[5px] hover:bg-[#1d2968] rounded-3xl'>Comprar</button>
              </div>
          </div>
       </div>
    );
}