import './styles.css'

import React, { useState } from 'react'

import api from '../../services/api'

import { useHistory } from 'react-router-dom'

import { message, Form, Button, Input, InputNumber  } from 'antd'

export default function AdicionarProduto(){

    const [disabled, setDisabled] = useState(false)
    const history = useHistory()

    async function handleSubmit (produto){
        setDisabled(true)
        api.post('/item', produto)
            .then((response) => {
                if(response.status === 201){
                    message.success('Produto adicionado com sucesso.');
                    history.push('/produtos')
                }
            })
            .catch((err) => {
                message.error("Aconteceu erro ao adicionar o produto!" + err.response.data.message)
            })
    }
    
    return(
        <div className='produto__container'>
            <h1>Adicionar novo produto</h1>
            <br/>
            <div className='form__produto'>
                <Form 
                name='submiProduto'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={handleSubmit}
                autoComplete='off'> 
                    <Form.Item 
                    label='Nome do Item: '
                    labelCol={{ span: 10 }}
                    name={"name"}
                    rules={ [ {required: true, message: "O nome do item não pode ser vazio"} ] }>
                        <Input/>
                    </Form.Item>

                    <Form.Item 
                    label='Descrição do item :' 
                    labelCol={{ span: 10 }}
                    name={"description"}
                    rules={[{required: false, message: "Insira a descrição do item."}]}>
                       <Input/>
                    </Form.Item>

                    <Form.Item 
                    label='Quantidade :  '
                    labelCol={{ span: 10 }}
                    name={"quantity"}
                    >
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}