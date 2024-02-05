import React from "react";
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css';
import Person1 from '../utils/img/user1.png';
import Person2 from '../utils/img/user2.png';
import Person3 from '../utils/img/user2.png';
import Person4 from '../utils/img/user2.png';

export function Reviews() {
    return (
        <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Commentaires</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Une soirée inoubliable. Le personnel impeccablement formé a veillé à chaque détail, offrant un service digne des plus grands établissements. Les plats créatifs ont dépassé toutes les attentes, offrant une expérience culinaire qui restera gravée dans ma mémoire.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-danger">Imane LAGHMAM</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Chaque détail, de la vaisselle délicate aux saveurs sophistiquées, témoigne de l'engagement inébranlable envers l'excellence.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-danger">xxx</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Une soirée magique les plats exquis, les vins raffinés et l'ambiance feutrée ont créé une expérience sensorielle inoubliable.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-danger">Simoh CHAHIK</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Une expérience gastronomique exceptionnelle ! Chaque plat   était une œuvre d'art culinaire, mariant subtilement les saveurs pour créer une symphonie de délices pour le palais. Le service attentif et le cadre élégant ont ajouté une touche de luxe à cette soirée mémorable.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="" />
                            <CardTitle className="text-danger">Gabriel HARFOUCHE</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}