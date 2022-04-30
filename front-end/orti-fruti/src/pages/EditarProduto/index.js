import './styles.css'

import React, {useEffect, useState} from 'react'
import api from '../../services/api'

import { useHistory, useLocation } from 'react-router-dom'
import { message, Input, Button, InputNumber } from 'antd'

export default function EditarProduto(){

    const history = useHistory()
    const location = useLocation()

    const [produtoEdit, setProdutoEdit] = useState({})

    useEffect(() => {
        console.log(location.state)
        setProdutoEdit({...location.state})
    }, [location])


    async function handleSubmitEdit(produto){
        api.patch(`/item/${produto.id}`, produto)
        .then((response) => {
            if(response.status === 200){
                message.success("Produto editado com sucesso!", 5)
                history.push('/produtos')
            }
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado!  " + err.response.data.message[0], 5)
        })
    }



    return(
        <div className='produto__container'>
            <h1>Editar Produto</h1>
            <h2>{produtoEdit.name}</h2>
            <br/>
            <div className='produto__edit'>

                <div className='produto__campo'>
                    <span className='produto__label'>Nome do produto: </span>
                    <Input value={produtoEdit?.name} onChange={(e) => {
                        setProdutoEdit((produtoEdit) =>{
                            return{...produtoEdit, name: e.target.value}
                        })
                    }}/>
                </div>

                <div className='produto__campo'>
                    <span className='produto__label'>Descrição do produto: </span>
                    <Input value={produtoEdit?.description} onChange={(e) => {
                        setProdutoEdit((produtoEdit) =>{
                            return{...produtoEdit, description: e.target.value}
                        })
                    }}/>
                </div>

                <div className='produto__campo'>
                    <span className='produto__label'>Quantidade do produto: </span>
                    <InputNumber value={produtoEdit?.quantity} onChange={(e) => {
                        setProdutoEdit((produtoEdit) =>{
                            return{...produtoEdit, quantity: e}
                        })
                    }}/>
                </div>
                <Button type='primary' className='ediar--btn' 
                onClick={() => handleSubmitEdit(produtoEdit)}>Editar</Button>

            </div>
        </div>
    )
}