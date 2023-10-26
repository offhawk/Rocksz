import './card.css';

function Card({ produto }) {
    
    return(
        <div className="card">
        <div className="card-img">
            <img src={produto.img}/>
        </div>
        <div className="card-info">
            <h1>{produto.nome}</h1>
            <p>{produto.info}</p>
            <div className="card-price-wrap">
                <div className="card-price"><p>R$ {produto.preco}</p></div>
                <div className="card-button">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;