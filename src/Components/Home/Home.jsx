const products = [
    {
        id: 1,
        name: 'CAZADORA BOXY FIT X STEFANO',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/c333/263b/3bb447859fad/eab88b99fb4b/05869023822-e1/05869023822-e1.jpg?ts=1727169558978&w=563&f=auto',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'CLP $139.990',
        color: 'Black',
    },
    {
        id: 2,
        name: 'VESTIDO ESTAMPADO ANIMAL',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/0f09/698f/f1334361befa/f0c820d7581b/09107135037-a1/09107135037-a1.jpg?ts=1718627111167&w=563&f=auto',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'CLP 65.990',
        color: 'Black & White',
    },
    {
        id: 3,
        name: 'ZAPATO TACÓN ANCHO',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/784d/3e70/e0554b41b9b6/8b3de3402246/11225410022-e2/11225410022-e2.jpg?ts=1723531552089&w=563&f=auto',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'CLP 50.990',
        color: 'Brown',
    },
    {
        id: 4,
        name: 'BOLSO SHOPPER BOLSILLO',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/6b2d/fdcf/fb6c4ebeb0c4/71580808a0d8/13319420800-a2/13319420800-a2.jpg?ts=1723531787941&w=563&f=auto',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'CLP 37.990',
        color: 'Black',
    },
]

export default function Home() {
    return (
        <div className="bg-white py-20">
            <img src="https://assets.teenvogue.com/photos/633dbbb29407f031a64abb0a/16:9/w_1920,c_limit/220801-05_0943_03_QC_EXT.jpg" alt="background"/>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos Destacados</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img alt={product.imageAlt} src={product.imageSrc} />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-blue-500">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

