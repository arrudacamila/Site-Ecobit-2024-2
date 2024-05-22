import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EcoNav from "../../components/Navbar/Navbar";
import "./Prod_Detalhes.css"

function Prod_Detalhes() {
    return (
        <div>
            <EcoNav />
            <div className='Prod_Detalhes'>
                <div className="card">
                    <div className="card-content">
                        <div className="carousel-container">
                            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
                                <div>
                                    <img src="src/img/fonte.jpg" alt="Descrição da Imagem 1" />
                                </div>
                                <div>
                                    <img src="path/to/your/image2.jpg" alt="Descrição da Imagem 2" />
                                </div>
                                <div>
                                    <img src="path/to/your/image3.jpg" alt="Descrição da Imagem 3" />
                                </div>
                                <div>
                                    <img src="path/to/your/image3.jpg" alt="Descrição da Imagem 3" />
                                </div>
                                <div>
                                    <img src="path/to/your/image3.jpg" alt="Descrição da Imagem 3" />
                                </div>
                            </Carousel>
                        </div>
                        <div className="text-container">
                            <h1>Título</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, impedit. Dignissimos iure exercitationem tenetur neque harum consequuntur, in sequi suscipit nobis ducimus quaerat eligendi quasi dolorum, quis itaque est aperiam?</p>
                            <p>Condição</p>
                            <p>Disponibilidade</p>
                            <p><i className='fab fa-whatsapp' /> (11) 9 1234-5678</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prod_Detalhes;
