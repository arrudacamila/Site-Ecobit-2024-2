import React, { useEffect, useRef, useState } from 'react';
import EcoNav from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer.jsx'
import Loading from '../../components/Loading/Loading'; // Importe o componente Loading
import "./Eco_Detalhes.css"

function EcoDetalhes() {
    const mapRef = useRef(null);
    const [mapLoading, setMapLoading] = useState(true); // Estado para controlar o carregamento do mapa

    useEffect(() => {
        initMap();
    }, []);

    const initMap = () => {
        const endereco = document.getElementById("adress").textContent;
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ address: endereco }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const { lat, lng } = results[0].geometry.location;

                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: lat(), lng: lng() },
                    zoom: 17.1,
                    disableDefaultUI: true,
                    draggable: false,
                });

                const marker = new window.google.maps.Marker({
                    position: { lat: lat(), lng: lng() },
                    map: map,
                    title: 'Nome do Ecoponto',
                });

                // Define o estado do mapa como carregado
                setMapLoading(false);
            } else {
                console.error('Geocode falhou devido a:', status);
            }
        });
    };

    return (
        <div className='eco-container'>
            <EcoNav />
            <div className='eco-header'>
                <h2 id="eco_name">Ecoponto João Batista (Vila Nogueira)</h2>
            </div>
            <div className="det_body">
                <div className="details-container">
                    <div className="map-container">
                        {mapLoading && <Loading />}
                        <div id="map" ref={mapRef} className="map"></div>
                    </div>
                    <div className="description">
                        <p className="title">Endereço:</p>
                        <p id="adress">Rua João Batista Alves do Nascimento, 546 Vila Nogueira - Diadema - São Paulo</p>
                        <p className="title">CEP:</p>
                        <p>04905-020</p>
                        <p className="note">*Aberto aos Sábados</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EcoDetalhes;
