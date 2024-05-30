import './Footer.css';

function Footer() {
    return (
        <footer className="footer py-4">
            <div className="footerContainer">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">
                        Copyright &copy; EcoBit 2024
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Política de Privacidade</a>
                        <span className="link-separator">|</span>
                        <a className="link-dark text-decoration-none ms-3" href="#!">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;