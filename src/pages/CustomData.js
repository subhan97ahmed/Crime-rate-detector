import React from "react";
import { useState } from "react";
import { Layout, Typography, Upload, message, Button, Row, Col, Input, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Table from "ant-responsive-table";
import Papa from 'papaparse'
import NavBar from "../components/NavBar";
import NavLogo from "../components/NavLogo";
import bg from "../bg.jpg";
import * as conColors from "../colors";
import "../App.less";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { Option } = Select;
// demo data
const dataSource = [
  {
    key: "1",
    year: 2021,
    month: 12,
    lat: 25.123,
    log: 23.034,
    crimetype: 6,
    reported: 13,
  },
];

const columns = [
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Month",
    dataIndex: "month",
    key: "month",
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Latitude",
    dataIndex: "lat",
    key: "lat",
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Longitude",
    dataIndex: "log",
    key: "log",
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Crime Type",
    dataIndex: "crimetype",
    key: "crimetype",
    showOnResponse: true,
    showOnDesktop: true
  },
  {
    title: "Reported Number",
    dataIndex: "reported",
    key: "reported",
    showOnResponse: true,
    showOnDesktop: true
  }
];

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;

function CustomData() {
  const [predictionData, setpredictionData] = useState(null)
  const [year, setyear] = useState('')
  const [month, setmonth] = useState('Month')
  const [crimeType, setcrimeType] = useState('Crime Type')

  const [uploaded, setuploaded] = useState(false)
  function onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);

      var file_type = info.file.type

      var file_size = info.file.size

      if (file_type === "application/vnd.ms-excel") {

        console.log("CSV file")
        console.log(info)
        Papa.parse(info.file.originFileObj,
          {
            delimiter: "",	// auto-detect
            newline: "",	// auto-detect
            quoteChar: '"',
            escapeChar: '"',
            header: false,
            transformHeader: undefined,
            dynamicTyping: false,
            preview: 0,
            encoding: "",
            worker: false,
            comments: false,
            step: undefined,
            complete: handlecsvupload,
            error: undefined,
            download: false,
            downloadRequestHeaders: undefined,
            downloadRequestBody: undefined,
            skipEmptyLines: true,
            chunk: undefined,
            chunkSize: undefined,
            fastMode: undefined,
            beforeFirstChunk: undefined,
            withCredentials: undefined,
            transform: undefined,
            delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
          });

      }
      else {
        message.error('Please provide valid file type .csv')

      }
    }
  }
  const updateUI = () => {
    setuploaded(true)
    message.success(` file uploaded successfully`);
  }
  const handlecsvupload = async (results) => {

    console.log("Finished:", JSON.stringify({
      data: results.data,
    }));
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: results.data,
      }),
    };
    const response = await fetch(
      "https://crimemodel.herokuapp.com/csvupload",
      requestOptions
    ).then(
      // console.log(response)
    ).catch(
      updateUI
    );

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
        "https://crimemodel.herokuapp.com/userpredicts",
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
    <>
      <Layout className="customdata">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavLogo></NavLogo>
          <NavBar selectedOp="2" />
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
          <div
            className="site-layout-background"
            style={{ padding: "6px", minHeight: "720px", position: "relative", }}
          >
            <Row >
              <Col span={24}>
                <Title style={{ color: txtColor, textAlign: "center" }}>Custom Data</Title>
              </Col>
              <Col span={24}>
                <p style={{ color: txtColor }}>Upload CSV file of the training data as shown below(do make sure format and order of the columns is like this demo data )</p>
              </Col>

            </Row>
            <Row>
              <Col span={24}>
                <Table antTableProps={{
                  showHeader: true,
                  columns,
                  dataSource,
                  pagination: false
                }}
                  mobileBreakPoint={768}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ textAlign: "center" }} >
                <Upload accept=".csv" onChange={onChange}>
                  <Button style={{ color: "black", marginTop: "20px", }} icon={<UploadOutlined />}>
                    Click to Upload CSV
                  </Button>
                </Upload>
              </Col>
            </Row>
            {
              uploaded === true ? (
                <div>
                  <Row gutter={[10, 10]} style={{ marginTop: "20px" }}>
                    <Col xs={24} lg={7}>
                      <Input
                        placeholder="Year"
                        value={year}
                        type="number"
                        size="large"
                        maxLength={5}
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
                </div>
              ) : (null)
            }

            {
              predictionData === null ? (null) : (
                <div style={{ marginTop: "10px" }}>
                  <Row gutter={20}>
                    <Col xs={3} lg={5}><h3>Year</h3></Col>
                    <Col xs={4} lg={5}><h3>Month</h3></Col>
                    <Col xs={4} lg={5}><h3>District</h3></Col>
                    <Col xs={5} lg={5}><h3>Type</h3></Col>
                    <Col xs={5} lg={4}><h3>Reported Numbers</h3></Col>
                  </Row>
                  <Row gutter={20}>
                    <Col xs={4} lg={5}><p>{year.substring(0, 4)}</p></Col>
                    <Col xs={4} lg={5}><p>{month}</p></Col>
                    <Col xs={4} lg={5}><p>South</p></Col>
                    <Col xs={4} lg={5}><p>{crimeType}</p></Col>
                    <Col xs={4} lg={4}><p>{(predictionData.south_prediction || '').replace(/[\[\]']+/g, '')}</p></Col>
                  </Row>
                  <Row gutter={20}>
                    <Col xs={4} lg={5}><p>{year.substring(0, 4)}</p></Col>
                    <Col xs={4} lg={5}><p>{month}</p></Col>
                    <Col xs={4} lg={5}><p>West</p></Col>
                    <Col xs={4} lg={5}><p>{crimeType}</p></Col>
                    <Col xs={4} lg={4}><p>{(predictionData.west_prediction || '').replace(/[\[\]']+/g, '')}</p></Col>
                  </Row>
                  <Row gutter={20}>
                    <Col xs={4} lg={5}><p>{year.substring(0, 4)}</p></Col>
                    <Col xs={4} lg={5}><p>{month}</p></Col>
                    <Col xs={4} lg={5}><p>Central</p></Col>
                    <Col xs={4} lg={5}><p>{crimeType}</p></Col>
                    <Col xs={4} lg={4}><p>{(predictionData.central_prediction || '').replace(/[\[\]']+/g, '')}</p></Col>
                  </Row>
                  <Row gutter={20}>
                    <Col xs={4} lg={5}><p>{year.substring(0, 4)}</p></Col>
                    <Col xs={4} lg={5}><p>{month}</p></Col>
                    <Col xs={4} lg={5}><p>Malir</p></Col>
                    <Col xs={4} lg={5}><p>{crimeType}</p></Col>
                    <Col xs={4} lg={4}><p>{(predictionData.malir_prediction || '').replace(/[\[\]']+/g, '')}</p></Col>
                  </Row>
                  <Row gutter={20} >
                    <Col xs={4} lg={5}><p>{year.substring(0, 4)}</p></Col>
                    <Col xs={4} lg={5}><p>{month}</p></Col>
                    <Col xs={4} lg={5}><p>East</p></Col>
                    <Col xs={4} lg={5}><p>{crimeType}</p></Col>
                    <Col xs={4} lg={4}><p>{(predictionData.east_prediction || '').replace(/[\[\]']+/g, '')}</p></Col>
                  </Row>


                </div>
              )
            }
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
    </>
  );
}

export default CustomData;
