import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Button = () => {
  return (
    <button className="home-button">
      <p>Veja mais</p>
      <div className="seta">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </button>
  );
};

export default Button;
