import { useHistory } from 'react-router-dom'

import './styles.css'

import logo from '../assets/logo.png'
import { Button } from 'antd'

export default function Inicio(){

    const history = useHistory()

    async function listarProdutos(event){
        event.preventDefault();
        history.push('/produtos')
    }

    return(
        <div className='inicio__container'>
            <section>
                <img src={logo} alt='logo' className='center'></img>
                <br/>

                <Button type='defaut' className='center' onClick={listarProdutos}>Ver produtos</Button>

            </section>
        </div>
    )
}