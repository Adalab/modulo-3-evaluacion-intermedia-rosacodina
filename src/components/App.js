import '../styles/App.scss';
import { useEffect, useState } from 'react';

// Función principal.
function App() {
  // Variables generales, constantes, variables de estado.
  // Hooks.
  // Funciones generales, funnciones manejadoras de eventos.

  //CONST
  const quotsList

  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    //cuando la API responde, guardamos los datos en el estado para que se vuelva a renderizar poniendo setStarWatsData por ejemplo
  });

  return (
    // Como solo se puede devolver una etiqueta, se puede usar una etiqueta ficticia vacia, llamada FRAGMENTO, y que se escribe, abiriendo y cerrando la etiqueta vacia, así "<> html </>".
    <>
      <header>
        <h1>Frases de Friends</h1>
      </header>
    </>
  );
}

export default App;
