import "./Rodape.css"

const Rodape = () => {
    return(
        <footer className="rodape">
            <div className="icons">
                <a href="https://www.facebook.com/hiagokalil.guinho"><img src="/imagens/fb.png"/> </a>
                <a href="https://twitter.com/gokapriv"> <img src="/imagens/tw.png"/> </a>
                <a href="https://www.instagram.com/hiagokalil"><img src="/imagens/ig.png" /> </a>
            </div>
            <div className="logo">
                <img className="logo_foto"src="/imagens/oplogo.png src"/>
            </div>
            <div>
                <h4>DESENVOLVIDO POR Hiago Kalil</h4>
            </div>
        </footer>
    )
}

export default Rodape