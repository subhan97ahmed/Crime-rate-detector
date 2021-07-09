import './App.less';
import bg from './bg.jpg'
import { Layout,Input, Typography} from 'antd';
import MapContainer from './components/MapContainer';
import NavBar from './components/NavBar';
import NavLogo from './components/NavLogo';
import * as conColors from './colors'

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const txtColor = conColors.txtColor
const footerBgColor = conColors.footerBgColor
const footerTxtColor = conColors.footerTxtColor
function App() {
  const onSearch = value => console.log(value);

  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <NavLogo/>
          <NavBar selectedOp='1' />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: "64px", backgroundImage: `url(${bg})`, backgroundAttachment: "scroll" }}>
          <div style={{ margin: '16px 0' }}></div>
          <div className="site-layout-background" style={{ padding: "24px", minHeight: "780px", }}>
            <div style={{ textAlign: 'center' }}>
              <Title style={{ color: txtColor }}>Crime Rate Detector</Title>
              <div style={{ position: 'sticky', textAlign: "center", top: '25%', }}>
                <Search placeholder="Enter Area to find Crime Rate" theme='light' onSearch={onSearch} enterButton size="middle" style={{ width: "260px" }} />
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
        <Footer style={{ textAlign: 'center', backgroundColor: footerBgColor, color: footerTxtColor }}>Design ©2021 Created by Team B</Footer>
      </Layout>
    </ div>);
}


export default App;
