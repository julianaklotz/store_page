import React from "react";
import './Modal.css';


export default function Modal({ isOpen, setModalOpen, item }) {
  if (isOpen && item) {
    return (
      <div className="modal-container">
        <div className="modal-preview" id="myModal">
          <div onClick={setModalOpen} className="close">
            <i className="fas fa-times"></i>
          </div>
          <img src={item.image_url} className="image" alt="" />
          <h3 className="fw-bold pt-3">{item.name}</h3>
          <div className="row sport-seller">
            <span className="col sport fs-5 space-between-5">{item.sport}</span>
            <span className="col sport fs-5 ">{item.seller}</span>
          </div>
          <div className="stars d-flex align-items-center justify-content-center">
            <i className="px-1 fas fa-star"></i>
            <i className="px-1 fas fa-star"></i>
            <i className="px-1 fas fa-star"></i>
            <i className="px-1 fas fa-star"></i>
            <i className="px-1 fas fa-star-half-alt stars"></i>
            <span className="mx-5 sizes fw-bold">{item.available_sizes}</span>
          </div>
          <p>{item.details}</p>
          <div className="price">R$ {item.price}</div>
          <div className="buttons">
            <a href="#" className="buy text-uppercase">
              comprar agora
            </a>
            <a href="#" className="cart text-uppercase">
              adicionar ao carrinho
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
}