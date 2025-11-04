import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this for Bootstrap styles
import NavBar from './componentes/NavBar/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="Bienvenidos a la tienda online" />
    </div>
  )
}

export default App