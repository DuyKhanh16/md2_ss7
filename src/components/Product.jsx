import React from 'react';
import '../pages/bai1/bai1.scss';

export default function Product(props) {
    const { data } = props;
    return (
        <>
            <div className='product-item'>
                <div className='product-item-img'>
                    <img src={data.img} alt="" />
                </div>
                <div className='product-item-desc'>
                    <div>{data.title}</div>
                    <div>{data.p}</div>
                    <button>Example button</button>
                </div>
            </div>
        </>
    )
}
