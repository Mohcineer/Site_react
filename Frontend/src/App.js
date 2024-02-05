import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Acceuil from './pages/Acceuil';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (

    <>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-danger fw-semibold'>
              Bistronomie Gourmande
            </Link>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Accueil</Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>A propos</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Acceuil />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>
                Rejoignez-nous sur les réseaux sociaux :</span>
            </div>
            <div>
              <a href='https://fr-fr.facebook.com/' rel="noreferrer" target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='https://twitter.com/i/flow/login' rel="noreferrer" target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='https://www.google.com/' rel="noreferrer" target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='https://fr.linkedin.com/' rel="noreferrer" target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" />
              </a>
            </div>
          </section>
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Bistronomie Gourmande
                  </h6>
                  <p>
                    L'art de la gastronomie décontractée une fusion unique entre bistrot et gastronomie
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Nos produits</h6>
                  <p>
                    <text className='text-reset'>
                      Boeuf de Kobé
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Caviar
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Vins millésimés et champagnes
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Fromages artisanaux / Huile d'olive extra vierge
                    </text>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Responsables</h6>
                  <p>
                    <text className='text-reset'>
                      Directeur Général
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Chef Exécutif
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Maître d'Hôtel
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Directeur Financier
                    </text>
                  </p>
                  <p>
                    <text className='text-reset'>
                      Responsable Marketing
                    </text>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Versailles
                  </p>
                  <p>
                    <a className="mail" href="mailto:info@example.com">
                      <MDBIcon icon="envelope" className="me-3" />
                      info@example.com
                    </a>
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 Copyright:
            <a className='text-reset fw-bold' href='/'>
              ermo.com
            </a>
          </div>
        </MDBFooter>

      </footer>
    </>
  );
}

// A rajouter apres : politique de confiden - cgv - cookie
export default App;

