import React from 'react';
import '../style.css';
import AOS from 'aos';

export default function () {
  return (
    <React.Fragment>
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossorigin="anonymous"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          id="navbar"
          data-aos="fade"
          data-aos-duration="600"
          data-aos-offset="800"
        >
          <div id="secciones">
            <h2>
              <a href="">Home</a>
            </h2>
            <h3>
              <a href="">Seccion1</a>
            </h3>
            <h3>
              <a href="">Seccion2</a>
            </h3>
            <h3>
              <a href="">Seccion3</a>
            </h3>
          </div>
        </div>
        <div>
          <div id="content">
            <h2 data-aos="fade" data-aos-duration="2000">
              Bienvenido a esta pantalla
            </h2>
            <h4 data-aos="fade-up" data-aos-duration="1000" id="subtitulo">
              Esto es un subtitulo{' '}
            </h4>
            <p>
              <i class="fas fa-angle-double-down"></i>
            </p>
          </div>

          <div id="inicio"></div>
        </div>

        <div id="segundo_bloque">
          <div data-aos="fade-up" data-aos-duration="500" id="img_fondo"></div>
          <h1 data-aos="fade-left" data-aos-duration="1000" id="quienes-somos">
            Quienes Somos
          </h1>
          <p data-aos="fade" data-aos-duration="2500" id="texto-quienes-somos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div id="tercer-bloque">
          <h1 data-aos="fade" data-aos-duration="1000" id="quienes-somos">
            Servicios
          </h1>
          <div id="texto_caja1">
            <div id="caja1" data-aos="fade" data-aos-duration="1000">
              {' '}
              <hr id="linea" />
            </div>
            <p id="info-servicios">Lorem ipsum dolor sit amet.</p>
          </div>
          <div id="texto_caja2">
            <div
              id="caja2"
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <hr id="linea" />
            </div>
            <p id="info-servicios">Lorem ipsum dolor sit amet.</p>
          </div>
          <div id="texto_caja3">
            <div
              id="caja3"
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <hr id="linea" />
            </div>
            <p id="info-servicios">Lorem ipsum dolor sit amet.</p>
          </div>
          <div id="texto_caja4">
            <div
              id="caja4"
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <hr id="linea" />
            </div>
            <p id="info-servicios">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div id="bloque-cosulta">
          <div
            data-aos="fade"
            data-aos-duration="2000"
            id="fondo_contactos"
          ></div>
          <h1 data-aos="fade" data-aos-duration="1000" id="quienes-somos">
            Contacto
          </h1>

          <div id="mover" data-aos="fade" data-aos-duration="1000">
            <h3>Teléfono:</h3>
            <p id="numero"> xxxxxxxxxxx</p>
          </div>
          <div id="mover" data-aos="fade" data-aos-duration="1000">
            <h3>Dirección:</h3>
            <p id="dire"> xxxxxxxxxxxxxx</p>
          </div>
          <div id="mover" data-aos="fade" data-aos-duration="1000">
            <h3>Mail:</h3>
            <p id="mail">xxxxxxxxxxxxxx@gmail.com</p>
          </div>
        </div>
        <div id="cuarto-bloque">
          <h1 data-aos="fade" data-aos-duration="1000" id="quienes-somos">
            Hacenos tu consulta
          </h1>
          <div>
            <form id="espacio">
              <label
                data-aos="fade-up"
                data-aos-duration="3000"
                for="consulta_nombre"
                id="infos"
              >
                Nombre y Apellido
              </label>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="form-group"
                id="consulta_nombre"
              >
                <input type="text" className="form-control" />
              </div>
              <label
                data-aos="fade-up"
                data-aos-duration="3000"
                for="consulta_email"
                id="infos"
              >
                Email
              </label>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="form-group"
                id="consulta_email"
              >
                <input type="email" className="form-control" />
              </div>
              <label
                data-aos="fade-up"
                data-aos-duration="3000"
                for="consulta_telefono"
                id="infos"
              >
                Teléfono
              </label>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="form-group"
                id="consulta_telefono"
              >
                <input type="text" className="form-control" />
              </div>
              <label
                data-aos="fade-up"
                data-aos-duration="3000"
                for="consulta_text_area"
                id="infos"
              >
                Mensaje
              </label>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="form-group"
                id="consulta_text_area"
              >
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <div id="centrar_gif">
                <img
                  id="correo"
                  src="https://c.tenor.com/q-zZSTX6jSIAAAAC/mail-download.gif"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        {AOS.init()}
      </body>
    </React.Fragment>
  );
}
