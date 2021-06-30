import logo from './logo.svg';
import log1 from './logo1.png'
// import './App.css';
import './App.less';
// import 'antd/dist/antd.css';
import { Image } from 'antd';

import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import MapContainer from './components/MapContainer';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


function App() {
  const onSearch = value => console.log(value);
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div><h1 style={{ color: 'white', textAlign: "center" }}>Crime Rate Detector</h1></div>
          <div className="logo"><Image src={log1} width={100} className='Logo' preview={false}></Image></div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Custom Data</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 58 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 25, minHeight: 380 }}>
            <div style={{ textAlign: 'center' }}>
              <Search placeholder="Enter Area" theme='dark' onSearch={onSearch} enterButton style={{ marginTop: "70px", width: 200, }} bordered='false' /></div>
              <MapContainer/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Design ©2021 Created by Team B</Footer>
      </Layout>,
      {/* mountNode, */}
      {/* ); */}
    </ div>);
}

export default App;
