import React, { useState } from "react";
import { Layout, Input, Typography, Row, Col } from "antd";
import MapContainer from "./components/MapContainer";
import NavBar from "./components/NavBar";
import NavLogo from "./components/NavLogo";
import * as conColors from "./colors";
import bg from "./bg.jpg";
import "./App.less";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;

// let searched=''
function App() {

  const [searchedCity, setsearchedCity] = useState('')
  const onSearch = (value) => {
    // if(value!==searched){
    setsearchedCity(value);
    // }
  };

  return (
    <div className="App">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavLogo />
          <NavBar selectedOp="1" />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 10vw",
            marginTop: "64px",
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover'
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div
            className="site-layout-background"
            style={{ padding: "6px", }}
          >
          <Row gutter={[10,20]}>
              <Col span={24}  >
                <Title style={{ color: txtColor , textAlign:"center" }}>Crime Rate Detector</Title>
              </Col>
              <Col span={24}>
                <Search
                  placeholder="Enter Area to find Crime Rate"
                  theme="light"
                  onSearch={onSearch}
                  enterButton
                  // size="middle"
                style={{ width: "65%", margin:"0 auto",display:"block" }}
                />
              </Col>
              <Col span={24} >
                <MapContainer searchedCity={searchedCity} />
              </Col>
            </Row>

          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: footerBgColor,
            color: footerTxtColor,
          }}
        >
          Design ©2021 Created by Team B
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
