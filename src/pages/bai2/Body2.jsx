import React, { useMemo, useState } from 'react';
import Product2 from '../../components/Product2';
import Cart from '../../components/Cart,';
import '../bai2/bai2.scss';

export default function Body2() {
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const USD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const [products, setProducts] = useState([
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/CocaColaBottle_background_free.jpg/1200px-CocaColaBottle_background_free.jpg',
            title: 'Cola',
            price: 10,
        },
        {
            id: 2,
            img: 'https://product.hstatic.net/1000141988/product/nuoc_ngot_pepsi_lon_320_ml_415ef91bdb15487ab3079155c3635f66.jpg',
            title: 'Pepsi',
            price: 20
        },
        {
            id: 3,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/CocaColaBottle_background_free.jpg/1200px-CocaColaBottle_background_free.jpg',
            title: 'Product 3',
            price: 15
        },
        {
            id: 4,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/CocaColaBottle_background_free.jpg/1200px-CocaColaBottle_background_free.jpg',
            title: 'Product 4',
            price: 18
        }
    ])
    const handleCart = (value) => {
        let newCart = [...cart];
        let index = products.findIndex(e => e.id == value);
        if (index != -1) {
            let existInCart = newCart.findIndex(e => e.id == value);
            if (existInCart != -1) {
                newCart[existInCart].quantity++;
            } else {
                newCart.unshift({ ...products[index], quantity: 1 });
            }
            setCart(newCart);
        }
    }
    const totalCart = useMemo(() => {
        setTotal(cart.reduce((a,b)=>a + b.price*b.quantity, 0));
    },[cart])
    const quantityCart = (id, type) => {
        let newCart = [...cart];
        const index = newCart.findIndex(e => e.id == id);
        if (type == "incre") {
            newCart[index].quantity++;
        } else {
            newCart[index].quantity--;
            if (newCart[index].quantity < 1) {
                newCart.splice(index,1);
            }
        }
        setCart(newCart);
    }
    return (
        <>
            <div className='shop-container'>
                <div className='shop-header'>
                    <div className='shop-header-1'>
                        <div>My Shop</div>
                        <div className='shop-header-cart'>Cart
                            <div className='shop-header-cart-num'>{cart.length || 0}</div>
                        </div>
                    </div>
                </div>
                <div className='shop-list'>
                    <div className='title'>Product List</div>
                    <div className='list-grid'>
                        {products.map((e, i) => (
                            <div key={i}>
                                <Product2 data={e} checkCart={handleCart} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='shop-cart'>
                    <div className='title'>Cart</div>
                    <div className='shop-cart-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((e, i) => (
                                    <tr key={i}>
                                        <Cart cart={e} quantity={quantityCart}/>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='shop-cart-total'>
                            Total: 
                            <div>{USD.format(total)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
