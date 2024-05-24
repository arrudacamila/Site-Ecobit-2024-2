import React, { useEffect, useRef } from 'react';
import EcoNav from '../../components/Navbar/Navbar';
import "./Eco_Detalhes.css"

function EcoDetalhes() {
    const mapRef = useRef(null); // Referência para o elemento DOM onde o mapa será renderizado

    useEffect(() => {
        // Inicializa o mapa após o componente ser montado
        initMap();
    }, []);

    // Função para inicializar o mapa
    const initMap = () => {
        // Obtenha o endereço do ecoponto
        const endereco = document.getElementById("adress").textContent;

        // Cria um geocoder
        const geocoder = new window.google.maps.Geocoder();

        // Geocode do endereço para obter as coordenadas
        geocoder.geocode({ address: endereco }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const { lat, lng } = results[0].geometry.location;

                // Cria um novo mapa e o associa ao elemento com a ID 'map'
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: lat(), lng: lng() }, // Define o centro do mapa
                    zoom: 17.1, // Define o nível de zoom
                    disableDefaultUI: true, // Desabilita todos os controles padrão do mapa
                    draggable: false, // Desabilita a capacidade de arrastar o mapa
                });

                // Adicione um marcador para representar a localização do ecoponto
                const marker = new window.google.maps.Marker({
                    position: { lat: lat(), lng: lng() },
                    map: map,
                    title: 'Nome do Ecoponto',
                });
            } else {
                console.error('Geocode falhou devido a:', status);
            }
        });
    };

    return (
        <div>
            <EcoNav />
            <div className='eco-header'>
                <h2 id="eco_name">Ecoponto João Batista (Vila Nogueira)</h2>
            </div>
            <div className="det_body">
                <div className="details-container">
                    <div id="map" ref={mapRef} className="map"></div>
                    <div class="description">
                        <p class="title">Endereço:</p>
                        <p id="adress">Rua João Batista Alves do Nascimento, 546 Vila Nogueira - Diadema - São Paulo</p>
                        <p class="title">CEP:</p>
                        <p>04905-020</p>
                        <p class="note">*Aberto aos Sábados</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EcoDetalhes;
