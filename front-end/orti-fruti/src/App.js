import React from "react";
import './App.css';
import { PlusOutlined, UnorderedListOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import { useHistory } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;



function App() {
  let history = useHistory();
  function handleClick() {
    history.push("/adicionar");
  }

  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras</Header>
        <Layout >
          <Sider className='menu'>
          <Menu className='menu__section'> 
          <Menu.Item key={1} icon={ <ShoppingCartOutlined />} onClick={() => history.push('/')}>
                Inicio
              </Menu.Item> 
              <Menu.Item key={2} icon={<PlusOutlined />} onClick={handleClick}>
                Adicionar Produto
              </Menu.Item>
              <Menu.Item key={3} icon={ <UnorderedListOutlined />} onClick={() => history.push('/produtos')}>
                Listar Produtos
              </Menu.Item>
            </Menu>
    
          </Sider>
          <Content className="content__box">
            <Routes/>
          </Content>
        </Layout>
        <Footer className='footer'>
        <div id="anima-time">
        Todos os direitos reservados.
          <div>
            <a href="https://github.com/pereira-alves/projeto-vem-ser-dev" target={"_blank"} rel="noreferrer">Projeto VEM-SER-DEV</a>
          </div>
        </div>
        </Footer>
    </Layout>

    </div>
  );
}

export default App;
