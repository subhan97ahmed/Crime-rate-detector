import log1 from './logo1.png'
import './App.less';
import { Image } from 'antd';
import bg from './bg.jpg'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import MapContainer from './components/MapContainer';
import { Typography } from 'antd';
import NavBar from './components/NavBar';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Search } = Input;

function App() {
  const onSearch = value => console.log(value);

  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" style={{ overflow: 'hidden' }}>
            <Image src={log1} height={100} width={100} style={{ marginTop: "-20px" }} preview={false} ></Image>
          </div>
          <NavBar selectedOp={'1'}/>    
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
            <div style={{ textAlign: 'center' }}>
              <Title style={{ color: "#6aceef" }}>Crime Rate Detector</Title>
              <div style={{ position: 'absolute', left: '30%', top: '25%', }}>
                <p style={{ float: "left", color: "#6aceef", marginTop: "5px" }}> Enter Area to find Crime Rate</p>
                <Search placeholder="Enter Area" theme='light' onSearch={onSearch} enterButton style={{ marginLeft: "5px", width: "200px", backgroundColor: "greenyellow", float: "left" }} />
              </div>
            </div>
            <div style={{
              position: 'absolute', left: '50%', top: '60%',
              transform: 'translate(-50%, -50%)', height: '50%', width: '70%', overflow: 'hidden'
            }}>
              <MapContainer />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: "#2E2A2B", color: "white" }}>Design ©2021 Created by Team B</Footer>
      </Layout>
    </ div>);
}


export default App;
