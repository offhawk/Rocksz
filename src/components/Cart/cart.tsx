import { useEffect, useState } from 'react';
import './cart.css';

function Cart({ produtos, onRemoveClick}) {
    
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let total = 0;
        produtos.forEach(produto => {
            total += produto.preco;
        });
        setSubtotal(total);
    }, [produtos])

    console.log(produtos)

    return(
        <div className="cart">
            <h2>Seu carrinho</h2>
            <div className="cart-container">
                {produtos.map((produto) => (
                <div className="cart-product" key={produto.nome}>
                    <div className="cart-img"><img src={produto.img}/></div>
                    <div className="cart-info">
                        <p>{produto.nome}</p>
                        <p className="cart-price">R$ {produto.preco}</p>
                    </div>
                    <div className='cart-button' onClick={() => onRemoveClick(produto)}>
                        <svg enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" ><path d="M20.377,16.519l6.567-6.566c0.962-0.963,0.962-2.539,0-3.502l-0.876-0.875c-0.963-0.964-2.539-0.964-3.501,0  L16,12.142L9.433,5.575c-0.962-0.963-2.538-0.963-3.501,0L5.056,6.45c-0.962,0.963-0.962,2.539,0,3.502l6.566,6.566l-6.566,6.567  c-0.962,0.963-0.962,2.538,0,3.501l0.876,0.876c0.963,0.963,2.539,0.963,3.501,0L16,20.896l6.567,6.566  c0.962,0.963,2.538,0.963,3.501,0l0.876-0.876c0.962-0.963,0.962-2.538,0-3.501L20.377,16.519z"/></svg>
                    </div>
                </div>
                ))}
            </div>
            <h2>Subtotal: R$ {subtotal}</h2>
        </div>

    )
}

export default Cart;