import './product.css';
import { useRef } from 'react';
import  closeModal  from '../../pages/productsPage/index';

function ProductDetails({ produto, onButtonClick }) {
    
    const modalRef = useRef(null);

    return(
            <div className='product-container'>
                <div className='product-img'>
                    <img src={produto.img}/>
                </div>
                <div className='product-info'>
                    <div className='product-details'>
                        {produto.artista?<><h2>Artista</h2><p>
                        {produto.artista}
                        </p></>:''}

                        <h2>Sobre</h2>
                        <p>
                        {produto.subinfo}
                        </p>
                    </div>
                    <div className='card-price-wrap'>
                        <div className='card-price'>
                            <p>R$ {produto.preco}</p>
                        </div>
                        <div className='quant-container'></div>
                        <div className='card-button' onClick={() => onButtonClick(produto)}><button>Comprar</button></div>
                    </div>
                </div>
            </div>
    )
}

export default ProductDetails;
