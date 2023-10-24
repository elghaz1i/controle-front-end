// ListeInscriptions.jsx
import React, { useState, useEffect } from 'react';

const ListeInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [filteredInscriptions, setFilteredInscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Effectuer une requête GET à l'API pour récupérer la liste des inscriptions
    // Mettre à jour l'état avec les données obtenues
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DE_VOTRE_API');
        const data = await response.json();
        setInscriptions(data);
        setFilteredInscriptions(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des inscriptions', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredData = inscriptions.filter((inscription) =>
      inscription.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInscriptions(filteredData);
  };

  return (
    <div>
      <h2>Liste des inscriptions</h2>
      <input
        type="text"
        placeholder="Rechercher par ville"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredInscriptions.map((inscription, index) => (
          <li key={index}>{inscription}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListeInscriptions;
