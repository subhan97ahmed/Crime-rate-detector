import "../App.less";
import bg from "../bg.jpg";
import { Layout, Typography, Image, Space } from "antd";
import NavBar from "../components/NavBar";
import NavLogo from "../components/NavLogo";
import log1 from "../logo1.png";
import { Card } from "antd";
//colors
import * as conColors from "../colors";
import { Col, Row } from "antd";
const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;
const cardcolor = conColors.cardcolor;
function AboutUs() {
  return (
    <>
      <Layout className="aboutus">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavLogo></NavLogo>
          <NavBar selectedOp="3" />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 50px",
            marginTop: "64px",
            backgroundImage: `url(${bg})`,
            backgroundAttachment: "scroll",
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div
            className="site-layout-background"
            style={{ padding: "24px", minHeight: "1300px" }}
          >
            <div style={{ textAlign: "center" }}>
              <Title style={{ color: txtColor }}>About Us</Title>
            </div>
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                height: "40%",
                width: "70%",
              }}
            >
              <section>
                <div className="site-card-border-less-wrapper">
                  <Card
                    title="Crime rate detector"
                    bordered={true}
                    headStyle={{ fontSize: "35px", color: "#6DDAF2" }}
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      left: "50%",
                      top: "60%",
                      transform: "translate(-50%, -50%)",
                      height: "130%",
                      width: "100%",
                      overflow: "hidden",
                      backgroundColor: footerBgColor,
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        color: "#6DDAF2",
                      }}
                    >
                      This is one of the interesting computer science project
                      ideas to create. As the name suggests, this Computer
                      Science project involves building a prediction system that
                      can analyze and predict the crime rate of a particular
                      location. Naturally, the system needs to be fed with
                      relevant data. It uses the K-means data mining algorithm
                      to predict the crime rate. The K-means algorithm can
                      cluster co-offenders and organized crime groups by
                      detecting relevant crime patterns via hidden links, link
                      prediction, and statistical analysis of crime data.
                    </p>
                  </Card>
                </div>
                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={11}>
                      <Card
                        title="Mentor"
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                      >
                        Sameer Ahmed Siddqui
                      </Card>
                    </Col>
                    <Col span={11}>
                      <Card
                        title="Mentor"
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                      >
                        Ovais Ashraf
                      </Card>
                    </Col>
                  </Row>
                </div>
                ,
                <div className="teamb">
                 <Row gutter={15}>
                    <Col span={5}>
                      <Card
                        title="Team B"
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                      >
                        Qaseem Samdani
                      </Card>
                    </Col>
                    <Col span={5}>
                      <Card
                        title="Team B"
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                      >
                        Subhan Ahmed
                      </Card>
                    </Col>
                    <Col span={5}>
                      <Card
                        title="Team B"
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                      >
                        Fizza Ahmed
                      </Card>
                    </Col>

                    <Col span={5}>
                      <Card
                        title="Team B "
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                      >
                        Areej Zahid
                      </Card>
                    </Col>
                    
                    <Col span={5}>
                      <Card
                        title="Team B"
                        bordered={true}
                        headStyle={{
                          fontSize: "25px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                        }}
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          color: "#6DDAF2",
                          backgroundColor: footerBgColor,
                          marginTop: '60px',
                        }}
                      >
                       Owais
                      </Card>
                    </Col>
                    </Row>
                  </div>
                ,
              </section>
            </div>
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

export default AboutUs;
