import React from 'react';
import './Contact.css';
import { ContactInfo } from '../Components/ContactInfo';
import { MDBIcon } from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { Reviews } from '../Components/Reviews';

function Contact() {
    return (
        <div className='contact-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Contact</h1>
                </div>
            </header>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <ContactInfo />
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center my-5'>
                        <Form>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                <MDBIcon icon="user" className="me-3" />
                                    <Form.Label htmlFor='first-name'>Nom</Form.Label>
                                    <Form.Control type='text' id='first-name' />
                                </div>
                                <div className='col-md-6'>
                                <MDBIcon icon="user" className="me-3" />
                                    <Form.Label htmlFor='last-name'>Prénom</Form.Label>
                                    <Form.Control type='text' id='last-name' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                <MDBIcon icon="envelope" className="me-3" />
                                    <Form.Label htmlFor='email-address'>Email</Form.Label>
                                    <Form.Control type='email' id='email-address' />
                                </div>
                                <div className='col-md-6'>
                                <MDBIcon icon="phone" className="me-3" />
                                    <Form.Label htmlFor='phone-number' type="text">Téléphone</Form.Label>
                                    <Form.Control type='tel' id='phone-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='row mb-3'>
                                <div className='col-md-6'>
                                <MDBIcon far icon="calendar" className="me-3" />
                                    <Form.Label htmlFor='date'>Date</Form.Label>
                                    <Form.Control type='date' id='date' />
                                </div>
                                <div className='col-md-6'>
                                <MDBIcon icon="list-ol" className="me-3" />
                                    <Form.Label htmlFor='guests-number'>Nombre d'invités</Form.Label>
                                    <Form.Control type='number' id='guests-number' />
                                </div>
                            </Form.Group>
                            <Form.Group className='mb-4'>
                            <MDBIcon icon="comments" className="me-3" />
                                <Form.Label htmlFor='comments'>Avis</Form.Label>
                                <Form.Control type='textarea' id='comments' />
                            </Form.Group>

                            <button type='submit' className='btn btn-danger btn-lg'>Valider</button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default Contact;