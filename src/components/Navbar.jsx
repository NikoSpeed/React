import React from 'react';
import Dropdown from './Dropdown';
import Form from './Form';
import Secciones from './Secciones';

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <Secciones/>
        <Dropdown/>
      </ul>
        <Form busqueda="Busqueda Producto"/>
    </div>
  </div>
</nav>  
        </>
    );
}

export default Navbar;
