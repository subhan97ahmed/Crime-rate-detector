import React from "react";
import { useState } from "react";
import { Layout, Typography, Upload, message, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Table from "ant-responsive-table";
import NavBar from "../components/NavBar";
import NavLogo from "../components/NavLogo";
import * as conColors from "../colors";
import bg from "../bg.jpg";
import "../App.less";
import Papa from 'papaparse'

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
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
  // const parse = {
    // name: "file",
    // action: "http://localhost:8000/csvupload",
    // headers: {
    //   authorization: "authorization-text",
    // },
    // // action:"http://localhost:8000/csvupload",
    // //   // method: "POST",
    // //   headers: {
    // //     accept: "application/json",
    // //     "Content-Type": "application/json",
    // //   },
    
    function onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
        
        // console.log(info.file)
        
        var file_type = info.file.type
        
        var file_size = info.file.size
        
        if (file_type === "application/vnd.ms-excel") {
          
          // setcsv(info.file)
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
          console.log("provide valid file type")
          
        }
      }
      
      // if (info.file.status === "done") {
      //     message.success(`${info.file.name} file uploaded successfully`);
      //   } else if (info.file.status === "error") {
      //       message.error(`${info.file.name} file upload failed.`);
      //     }
        }
      
  

  const handlecsvupload = async (results)=>{
    
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
    );
    console.log(response)
  };

  function CustomData() {
    
    const [csv, setcsv] = useState(null)
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
              style={{ padding: "6px", minHeight: "720px", position: "relative", height: "60vh" }}
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
                  <Upload  accept=".csv" onChange={onChange}>
                    <Button style={{ color: "black", marginTop: "20px", }} icon={<UploadOutlined />}>
                      Click to Upload CSV
                    </Button>
                  </Upload>
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
      </>
    );
}

export default CustomData;
