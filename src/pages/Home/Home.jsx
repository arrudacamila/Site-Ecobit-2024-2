import EcoNav from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";
import Button from "../../components/HOME/Button/Button.jsx";
import Icon from "../../components/HOME/Icons/Icons.jsx";
import FloatingButton from "../../components/FloatingButton/FloatingButton.jsx";
import { useEffect , useState } from "react";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    setIsLoggedIn(!!id);
    if (id === "2") {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <section>
        <EcoNav />
      </section>
      <section>
        <img
          className="bannerhomer"
          src="./src/img/Home.png"
          alt="BannerHome"
        />
      </section>
      <section className="gridHome">
        <div className="maisDoado">
          <h3>
            <b>Itens mais Doados</b>
          </h3>
          <p>Seja um doador ou aquele que quer a doação</p>
          <Button />
        </div>
        <div className="blocos">
          <div className="destaques">
            <div>
              <img
                className="imgdestaques"
                src="./src/img/fotoHome1.png"
                alt="fotoHome1"
              />
            </div>
            <h6>Roupas</h6>
          </div>
          <div className="destaques">
            <div>
              <img
                className="imgdestaques"
                src="./src/img/fotoHome2.png"
                alt="fotoHome2"
              />
            </div>
            <h6>Roupas</h6>
          </div>
          <div className="destaques">
            <div>
              <img
                className="imgdestaques"
                src="./src/img/fotoHome3.png"
                alt="fotoHome3"
              />
            </div>
            <h6>Roupas</h6>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h4>Sobre</h4>
          <p>Plataforma para achar o destino correto para sua coisas paradas</p>
        </div>
        <div className="Icons">
          <div className="text-icon">
            <Icon />
            <h5>Ajude o planta</h5>
            <p>
              Recicle aqueles materiais e lixos que você não sabe o destino
              correto
            </p>
          </div>
          <div className="text-icon">
            <Icon />
            <h5>Empacote </h5>
            <p>
              Encontre o local correto e as pessoas que precisam da sua doação
            </p>
          </div>
          <div className="text-icon">
            <Icon />
            <h5>Procure</h5>
            <p className="texto-do-icon">
              Procure por doações disponível, ONGs e local de coleta do
              município
            </p>
          </div>
        </div>
        {isLoggedIn ? <FloatingButton /> : ""}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
