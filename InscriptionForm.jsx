import axios from 'axios';

const InscriptionForm = () => {
  const cities = ['Casa', 'Rabat', 'Kenitra', 'Marrakech', 'Meknes'];
  const options = ['Dev Digital', 'Dev Mobile', 'Infra Digitale'];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      ville: formData.get('ville'),
      option: formData.get('option'),
    };
    axios
      .post('URL_DE_VOTRE_API', data)
      .then((response) => {
        console.log('Requête POST réussie', response);
        // Ajoutez ici la logique de manipulation de la réponse si nécessaire
      })
      .catch((error) => {
        console.error('Erreur lors de la requête POST', error);
        // Ajoutez ici la logique de gestion des erreurs si nécessaire
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="ville">Ville:</label>
        <select name="ville">
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="option">Option:</label>
        <select name="option">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InscriptionForm;
