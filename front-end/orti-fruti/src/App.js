import React from "react";
import './App.css';
import { PlusOutlined, UnorderedListOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import { useHistory } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;



function App() {
  const history = useHistory()

  return (
    <div className="main">
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras</Header>
        <Layout >
          <Sider className='menu'>
              <Menu className='menu__section'
              items={[
                {
                  label: (
                    <a target="_self" rel="Página Inicial" href="http://localhost:3000">
                      Página Inicial
                    </a>
                  ),
                  icon: <ShoppingCartOutlined />,
                  disabled: false
                },
                {
                  label: (
                    <a target="_self" rel="Adicionar Item" href="http://localhost:3000/adicionar">
                      Adicionar
                    </a>
                  ),
                  icon: <PlusOutlined/>,
                  disabled: false
                },
                {
                  label: (
                    <a target="_self" rel="Listar Produtos" href="http://localhost:3000/produtos">
                        Listar
                    </a>
                  ),
                  icon: <UnorderedListOutlined />,
                  disabled: false,
                },
              ]}
            />
          </Sider>
          <Content className="content__box">
            <Routes/>
          </Content>
        </Layout>
        <Footer className='footer'>Todos os direitos reservados.</Footer>
    </Layout>

    </div>
  );
}

export default App;
