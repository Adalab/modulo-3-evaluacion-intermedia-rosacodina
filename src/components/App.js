import '../styles/App.scss';
import { useEffect, useState } from 'react';

// Función principal.
function App() {
  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    //cuando la API responde, guardamos los datos en el estado para que se vuelva a renderizar poniendo setStarWatsData por ejemplo
  });

  //Variable de estado que contenga las frases

  const [data, setData] = useState([]);

  //Pintar la lista
  const phrasesData = data.map((phrase) => <li>{phrase.quote}</li>);

  //-----------------
  //Cada vez que queramos pintar en el HTML datos que vienen de un listado, array, tenemos que hacer un map

  return (
    // Como solo se puede devolver una etiqueta, se puede usar una etiqueta ficticia vacia, llamada FRAGMENTO, y que se escribe, abriendo y cerrando la etiqueta vacia, así "<> html </>".
    <>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <body>
        <ul>{phrasesData}</ul>
      </body>
    </>
  );
}

export default App;
