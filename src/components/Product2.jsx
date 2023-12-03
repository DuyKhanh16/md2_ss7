import React from 'react';

export default function Product2(props) {
    const { data, checkCart } = props;
    const USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const addToCart = (id) => {
        checkCart(id);
    }
    return (
        <>
            <div className='one-product'>
                <div className='one-product-img'>
                    <img src={data.img} alt="" />
                </div>
                <div className='one-product-desc'>
                    <div>{data.title}</div>
                    <div> {USD.format(data.price)}</div>
                    <button onClick={()=>addToCart(data.id)}>Add to cart</button>
                </div>
            </div>
        </>
    )
}
