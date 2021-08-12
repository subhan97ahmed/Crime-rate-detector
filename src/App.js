import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Input, Typography, Row, Col, Select, Button, message } from "antd";
import MapContainer from "./components/MapContainer";
import NavBar from "./components/NavBar";
import NavLogo from "./components/NavLogo";
import bg from "./bg.jpg";
import * as conColors from "./colors";
import "./App.less";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;

function App() {

  const [searchedCity, setsearchedCity] = useState('')
  const [predictionData, setpredictionData] = useState(null)
  const [year, setyear] = useState('')
  const [month, setmonth] = useState('Month')
  const [crimeType, setcrimeType] = useState('Crime Type')
  const history = useHistory();
  const email = localStorage.getItem("email");

  const onSearch = (value) => {
    // if(value!==searched){
    {
      email ? setsearchedCity(value) :
        window.location.replace("./login");

    }
    // }
  };
  const OnClickPredict = async () => {
    if (Number(year) >= 1800 && Number(year) <= 3000 && month !== 'Month' && crimeType !== 'Crime Type') {
      const requestOptions = {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year: Number(year),
          month: Number(month),
          crimeType: Number(crimeType),
        }),
      };
      const response = await fetch(
        "https://crimemodel.herokuapp.com/predicts",
        requestOptions
      );
      const data = await response.json();
      setpredictionData({
        year: data.year,
        month: data.month,
        crimeType: data.crimeType,
        prediction: data.prediction,
        south_prediction: data.south_prediction,
        east_prediction: data.east_prediction,
        west_prediction: data.west_prediction,
        central_prediction: data.central_prediction,
        malir_prediction: data.malir_prediction,
      });
      console.log(predictionData);
    }
    else {
      message.error("Please make sure you fill all the fields and year is between 1800 and 3000")
    }
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
            backgroundSize: "cover",
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div className="site-layout-background" style={{ padding: "6px" }}>
            <Row gutter={[10, 20]}>
              <Col span={24}>
                <Title style={{ color: txtColor, textAlign: "center" }}>
                  Crime Rate Detector
                </Title>
              </Col>
              <Col span={24}>
                <Row gutter={[5, 7]}>
                  <Col span={24}>
                    <Search
                      placeholder="Enter Area to find Crime Rate"
                      theme="light"
                      onSearch={onSearch}
                      enterButton
                      size="large"
                      style={{
                        width: "65%",
                        margin: "0 auto",
                        display: "block",
                      }}
                    />
                  </Col>
                </Row>
                <Row gutter={[10, 10]} style={{ marginTop: "20px" }}>
                  <Col xs={24} lg={7}>
                    <Input
                      placeholder="Year"
                      value={year}
                      type="number"
                      size="large"
                      onKeyDown={() => { }}
                      onChange={(e) => setyear(e.target.value)}
                      style={{
                        width: "100%",
                        margin: "0 auto",
                        display: "block",
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={7}>
                    <Select
                      defaultValue="Month"
                      size="large"
                      value={month}
                      onSelect={(e) => setmonth(e)}
                      style={{
                        width: "100%",
                        margin: "0 auto",
                        display: "block",
                      }}
                    >
                      <Option value="1">January</Option>
                      <Option value="2">February</Option>
                      <Option value="3">March</Option>
                      <Option value="4">April</Option>
                      <Option value="5">May</Option>
                      <Option value="6">June</Option>
                      <Option value="7">July</Option>
                      <Option value="8">August</Option>
                      <Option value="9">September</Option>
                      <Option value="10">October</Option>
                      <Option value="11">November</Option>
                      <Option value="12">December</Option>
                    </Select>
                  </Col>
                  <Col xs={24} lg={7}>
                    <Select
                      defaultValue="Crime Type"
                      value={crimeType}
                      size="large"
                      onSelect={(e) => setcrimeType(e)}
                      style={{
                        width: "100%",
                        margin: "0 auto",
                        display: "block",
                      }}
                    >
                      <Option value="1">Bank robbery</Option>
                      <Option value="2">Car snatching</Option>
                      <Option value="3">Highway robbery</Option>
                      <Option value="4">Murder</Option>
                      <Option value="5">Murder during robbery</Option>
                      <Option value="6">Murder as target-killing</Option>
                    </Select>
                  </Col>
                  <Col xs={24} lg={3}>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        color: footerBgColor,
                        width: "100%",
                        margin: "0 auto",
                        display: "block",
                      }}
                      onClick={OnClickPredict}
                    >
                      Predict
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col span={24} >
                <MapContainer searchedCity={searchedCity} predictionData={predictionData} />
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
