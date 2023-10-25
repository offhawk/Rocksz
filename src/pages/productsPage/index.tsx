import { useEffect, useState } from 'react'
import  Header  from '../../components/Header/header';
import  Card  from '../../components/ProductCard/card';

function ProductsPage() {

    const [produtos, setProdutos] = useState([{}]);

    useEffect(() => {
        const produtos2 = [{
            nome: "Lana Del Rey – Ultraviolence",
            info: "Vinil, Indie",
            preco: 699.00,
            img: "https://regards.com.br/wp-content/uploads/2023/10/ultrav-600x600.png",
            categoria: ["Vinil", "Indie"],
            subinfo: "Esta versão rara e altamente desejada de Ultraviolence de Lana Del Rey é um destaque na coleção de discos de qualquer pessoa. Esta é uma prensagem exclusiva que apresenta capa alternativa do álbum fotografado por Neil Krug e é a única versão deste álbum prensada em um lindo vinil translúcido de cor azul e violeta opaco. Peças únicas e extremamente limitadas, não perca a sua."
        }, {
            nome: "SZA - SOS",
            info: "Vinil, Pop",
            preco: 320.00,
            img: "https://regards.com.br/wp-content/uploads/2023/04/lp8-600x600.png",
            categoria: ["Vinil", "Pop"],
            subinfo: "Esta versão rara e altamente desejada de SOS de SZA é um destaque na coleção de discos de qualquer pessoa. Esta é uma prensagem exclusiva que apresenta capa alternativa do álbum fotografado por Neil Krug e é a única versão deste álbum prensada em um lindo vinil translúcido de cor azul e violeta opaco. Peças únicas e extremamente limitadas, não perca a sua."
        }, {
            nome: "Lana Del Rey – Did You Know That There’s A Tunnel Under Ocean Blvd",
            info: "Vinil, Indie",
            preco: 399.00,
            img: "https://regards.com.br/wp-content/uploads/2023/04/17-2.png",
            categoria: ["Vinil", "Indie"],
            subinfo: "Did you know that there’s a tunnel under Ocean Blvd é o nono álbum de estúdio da aclamada cantora e compositora Lana Del Rey, composto por 16 faixas e interlúdios com participações de Father John Misty, Tommy Genesis, Jon Batiste, Bleachers e muito mais."
        }, {
            nome: "Lana Del Rey – Ultraviolence",
            info: "CD, Indie",
            preco: 120.00,
            img: "https://regards.com.br/wp-content/uploads/2023/04/cd-26-600x600.png",
            categoria: ["CD", "Indie"],
            subinfo: `CD Lana Del Rey – Ultraviolence – Acrílico é o terceiro álbum da artista musical americana Lana Del Rey, com faixas indie pop e soft rock, com lançamento em 13 de junho de 2014 pela gravadora Interscope Records. Incluindo músicas de sucesso como Ultraviolence e West Coast.`
        }, {
            nome: "EDEN - ICYMI",
            info: "Vinil, Indie",
            preco: 215.00,
            img: "https://i.discogs.com/1UhpcjjbQGoaYAIUVj5nbQsLMMIy3aKsNWR7NtnIcUY/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MjUy/MDkwLTE2OTMzOTY0/NDItMjgwNC5qcGVn.jpeg",
            categoria: ["Vinil", "Indie"],
            subinfo: "ICYMI (In Case You Missed It) é o terceiro álbum de EDEN."
        }, {
            nome: "Toca Discos Raveo – Sonetto Rose Gold",
            info: "Toca Discos",
            preco: 569.00,
            img: "https://regards.com.br/wp-content/uploads/2021/08/vitrola-raveo-sonetto-rose-gold-4-600x600.png",
            categoria: "Toca Discos",
            subinfo: `Bandas e gravadoras voltaram a lançar e relançar grandes sucessos em vinil. Não é apenas um modismo, o mercado de vinil cresce continuadamente e com muita força em todo o mundo. Com mais de 60 anos de existência o vinil se mantém vivo entre os apaixonados pela boa música.
            O ritual prazeroso e relaxante de retirar o disco do álbum e colocá-lo para tocar não tem paralelo em outras mídias. Resgate sua coleção de vinil ou aproveite e comece a sua curtindo seus LPs com estilo. O Toca Discos Raveo – Sonetto Black está equipado com 3 rotações diferentes para que você curta todos os tipo de LP.`
        }, {
            nome: "Toca Discos Raveo – Sonetto Black",
            info: "Toca Discos",
            preco: 549.00,
            img: "https://regards.com.br/wp-content/uploads/2021/08/a78257f33b29fb9eb2dab9e6d050feab.jpg",
            categoria: ["Toca Discos"],
            subinfo: `Bandas e gravadoras voltaram a lançar e relançar grandes sucessos em vinil. Não é apenas um modismo, o mercado de vinil cresce continuadamente e com muita força em todo o mundo. Com mais de 60 anos de existência o vinil se mantém vivo entre os apaixonados pela boa música.
            O ritual prazeroso e relaxante de retirar o disco do álbum e colocá-lo para tocar não tem paralelo em outras mídias. Resgate sua coleção de vinil ou aproveite e comece a sua curtindo seus LPs com estilo. O Toca Discos Raveo – Sonetto Black está equipado com 3 rotações diferentes para que você curta todos os tipo de LP.`
        }, {
            nome: "T-Shirt ICYMI Tour",
            info: "Camiseta",
            preco: 120.00,
            img: "https://s9.limitedrun.com/images/1626713/ICYMI_Tour_Tee_-_Front.png",
            categoria: ["Camiseta", "Roupas"],
            subinfo: `Uma camiseta extremamente confortável!`
        }, {
            nome: "Radiohead – In Rainbows",
            info: "Vinil, Rock",
            preco: 475.00,
            img: "https://www.turntablelab.com/cdn/shop/products/radiohead-inrainbows-blackvinyl-1_1000x1000.jpg?v=1654181165",
            categoria: ["Vinil", "Rock"],
            subinfo: `Radiohead lançou um novo álbum há alguns meses e é muito bom. Caso você ainda não tenha roubado da Intarwebs - ou se você o fez e gostaria de algo melhor do que MP3s de 160kbps - aqui está a versão oficial em vinil, prensada em alto volume em cera pesada com letras e encartes completos. Confira estas faixas: "15 Step", "Weird Fishes / Arpeggi", "Reckoner", "Bodysnatchers", "All I Need". Deixando de lado a ousadia do Pitchforkian, In Rainbows é o álbum de "rock" seguinte que todo mundo queria do Radiohead desde o lançamento do OK Computer, superando facilmente Hail To The Thief e quase nem comparável ao Kid A. 10 faixas, mais eletrônicas e ambientais. ; 42 minutos. Recomendado.`
        }, {
            nome: "Radiohead - Ok Computer",
            info: "Vinil, Rock",
            preco: 770.00,
            img: "https://www.turntablelab.com/cdn/shop/products/radiohead-okcomputer-blackvinyl-1_1000x1000.jpg?v=1627913141",
            categoria: ["Vinil", "Rock"],
            subinfo: `Edição XL Recordings 2LP do clássico moderno de 1997 do Radiohead. Inclui "Karma Police", "Paranoid Android", "Climbing Up The Walls", "Airbag", "No Surprises" e "Lucky". Jaqueta dobrável; vinil duplo. 12 faixas no total.`
        }, {
            nome: "Camiseta Deftones",
            info: "Camiseta",
            preco: 90.00,
            img: "https://cdn.awsli.com.br/600x1000/2378/2378937/produto/160325814/d3b8228fa0.jpg",
            categoria: ["Camiseta"],
            subinfo: "Uma camiseta extremamente confortável que apenas pessoas lindas usam! (Conheço uma menina de INF3 no Cefet que usa e ela é linda!"
        }, {
            nome: "Mitski - Puberty 2",
            info: "Vinil, Indie",
            preco: 300.00,
            img: "https://youngvinyl.com/wp-content/uploads/2022/05/IMG_4867-scaled.jpg",
            categoria: ["Vinil", "Indie"],
            subinfo: "Puberty 2 é o quarto álbum de estúdio da cantora e compositora de indie rock americana Mitski, lançado em 17 de junho de 2016, o primeiro lançamento pela Dead Oceans."
        }];

        console.log('teste')
        setProdutos(produtos2);
      }, []);

    return (
        <>
            <Header/>
            <div className='info'>
                <h1>Todos os produtos ({produtos.length})</h1>
                <div id='filtros'></div>
            </div>
            <div className='container'>
            {produtos.map((produto, index) => (
                <div className='row'>
                    <Card produto={produto} key={index}/>
                </div>
            ))}
            </div>
        </>
    )
}

export default ProductsPage
