import React from "react";
import Maps from "../Maps"

export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center ">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Où nous trouver</h2>
            <Maps></Maps>
            <h3>Heures d'ouverture</h3>
            <p className="m-0">Lun - Ven : 17h00 - 1h00</p>
            <p>Sam - Dim : 17h00 - 5h00</p>
        </div>
    )
}
/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.1690722601797!2d2.1236701759579826!3d48.797751704972725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67dc7cd8ffffb%3A0xd5959f6a616e4b1!2s5%20bis%20Rue%20du%20March%C3%A9%20Neuf%2C%2078000%20Versailles!5e0!3m2!1sfr!2sfr!4v1706864858372!5m2!1sfr!2sfr"
width="600"
height="450"
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title ="Responsiv google maps"></iframe>*/