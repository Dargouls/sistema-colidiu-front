import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../index.css';

export default class Servicos extends Component {

    render() {
        return (
            <div className="app flex-colum justify-content-center align-items-center" style={{width: "100%"}}>
                <img className="imagem-pagina-construcao" src={require("../../assets/img/page_building.svg")} alt="img-pag-building"></img>
                <h1 className="nome-pagina-construcao">Adicione os serviços aqui</h1>
            </div>       
        )
    }

}