import './Footer.css'

const Footer = () => {
    return(
        <section className='footer'>
            <div className='redes'>
                <a href="facebook.com" target="_blank">
                <img src="../imagens/fb.png" alt="facebook" />
                </a>
                <a href="twitter.com" target="_blank">
                <img src="../imagens/tw.png" alt="twitter" />
                </a>
                <a href="instagram.com" target="_blank">
                <img src="../imagens/ig.png" alt="instagram" />
                </a>
            </div>
            <div>
                <img src="../imagens/logo.png" alt="Logo organo" />
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
        </section>
    )
}

export default Footer