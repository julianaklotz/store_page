import React from "react";
import { useState } from 'react'
import Modal from './ModalProject'


const Card = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openItemModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <div className="products-container">
      <div className="row item-list p-2 mt-4 gx-0 gy-3">
        {item &&
          item.map((val) => (
            <div key={val.name} className="product col-md-4 col-sm-6 card my-3 border-0">
              <div className="card-img-top text-center col-md-7 col-lg-5 col-xl-4 col-sm item-img position-relative">
                <img src={val.image_url} alt="" className="w-75" />
              </div>
              <div className="card-body text-center">
                <div className="card-title text-capitalize my-1 fs-5">{val.name}</div>
                <div className="card-price fw-bold">
                  R$ {val.price}
                  <button type="button" className="button-card" onClick={() => openItemModal(val)}>Detalhes</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {selectedItem && (
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)} item={selectedItem} />
      )}
    </div>
  );
};


export default Card;