import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { useParams, useHistory } from "react-router-dom";
import './styles.css';

import { Button, Card, message, Modal } from "antd";
import { EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


export default function DetalhesProduto(){
    
    const [produto, setProduto] = useState([])
    const history = useHistory()

    let {id} = useParams();

    const { confirm } = Modal;

        function showConfirm(produto) {
        confirm({
            title: 'Confirma a exclusão do produto?',
            icon: <ExclamationCircleOutlined />,
            content: produto.name,
            onOk() {
                handleDelete(produto.id)
            },
            onCancel() {
            console.log('Cancel');
            },
        });
        }

    function handleDelete(id){
        api.delete(`/item/${id}`)
        .then((response) => {
            if(response.status === 200){
                message.success("Produto excluido com sucesso")
                history.push(`/produtos`)
            }
        })
        .catch((err) => {
            message.error('Aconteceu um erro inesperado.' + err)
        })
    }

    useEffect(() => {
        api.get(`/item/${id}`)
        .then((response) =>{
        setProduto(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado" + err)
        })
    }, [])  
    return(
        <div className="produto__container">
            <h1>Detalhes do produto</h1>
            <div className="produto__card__container">
                <Card key={produto.id} title={produto.name} bordered={false}>
                    <p>Id: {produto.id}</p>
                    <p> UpdatedAt: {produto.updatedAt}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                    <hr/>
                    <div className="produto__card__actions">
                        <Button type="defaut" success icon={<EditOutlined />} onClick={() =>  history.push(`/editar/${produto.id}`, produto)}>Editar</Button>
                        <Button type="primary" danger onClick={() => showConfirm(produto)}>Excluir produto</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}