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
                                    <img src="src/img/armario.jpg" alt="Descrição da Imagem 1" />
                                </div>
                                <div>
                                    <img src="src/img/armario2.jpg" alt="Descrição da Imagem 2" />
                                </div>
                                <div>
                                    <img src="src/img/armario3.jpg" alt="Descrição da Imagem 3" />
                                </div>
                                <div>
                                    <img src="src/img/armario4.jpg" alt="Descrição da Imagem 3" />
                                </div>
                                <div>
                                    <img src="src/img/armario5.jpg" alt="Descrição da Imagem 3" />
                                </div>
                            </Carousel>
                        </div>
                        <div className="text-container">
                            <h1>Armário Solteiro</h1>
                            <p>Doa-se guarda roupa solteiro, com 1 ano de uso, está em ótimo estado de conservação. 4 portas 2 gavetas chile moval naturale/branco</p>
                            <p>altura dos pés: 7 cm
                                altura (cm): 183 cm
                                largura (cm): 103 cm
                                profundidade (cm): 47 cm
                                peso (kg): 57.59 kg
                                suporta até (kg): 56 kg</p>
                            <p>Condição: usado em estado de novo</p>
                            <p>Disponibilidade para levar: Não</p>
                            <p><i className='fab fa-whatsapp' /> (11) 9 1234-5678</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prod_Detalhes;
