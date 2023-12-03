import React, { useState } from 'react'
import './bai1.scss';
import Product from '../../components/Product';
export default function Body() {
    const [products, setProducts] = useState([
        {
            img: 'https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg',
            title: 'Example Card',
            p: 'This is an example card',
        },
        {
            img: 'https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg',
            title: 'Example Card',
            p: 'This is an example card'
        },
        {
            img: 'https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg',
            title: 'Example Card',
            p: 'This is an example card'
        },
        {
            img: 'https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg',
            title: 'Example Card',
            p: 'This is an example card'
        },
    ]);
    return (
        <>
            <div className='body-container'>
                <div className='body-grid'>
                    {products.map((e, i) => (
                        <div key={i}>
                            <Product data={e} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
