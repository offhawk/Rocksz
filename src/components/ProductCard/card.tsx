import './card.css';

function Card({ produto, onButtonClick, onProductClick }) {
    
    return(
        <div className="card">
        <div className="card-img" onClick={() => onProductClick(produto)}>
            <img src={produto.img}/>
        </div>
        <div className='info-wrap'>
            <div className="card-info" onClick={() => onProductClick(produto)}>
                <h1>{produto.nome}</h1>
                <p>{produto.info}</p>
            </div>
            <div className="card-price-wrap">
                <div className="card-price"><p>R$ {produto.preco}</p></div>
                <div className="card-button">
                    <button onClick={() => onButtonClick(produto)}>Comprar</button>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Card;