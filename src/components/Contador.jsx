import { useState } from 'react'

const Contador = () => {
  // Define una variable de estado llamada "contador" con un valor inicial de 0.
  const [contador, setContador] = useState(0);

  // Agrega una función que incrementa el valor del contador en 1.
  const incrementarContador = () => {
    setContador(contador + 1)
  };

  // Agrega una función que decrementa el valor del contador en 1.
  const decrementarContador = () => {
    setContador(contador - 1)
  };

  // Agrega una función que inicializa el valor del contador a 0.
  const inicializarContador = () => {
    setContador(contador - contador)
  };

  // Renderiza el valor del contador en la pantalla junto con un botón.
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementarContador}>Incrementar</button>
      <button onClick={decrementarContador}>Decrementar</button>
      <button onClick={inicializarContador}>Inicializar</button>
    </div>
  );
};

export default Contador