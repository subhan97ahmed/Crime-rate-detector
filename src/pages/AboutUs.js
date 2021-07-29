import "../App.less";
import bg from "../bg.jpg";
import { Layout, Typography, Image} from "antd";
import NavBar from "../components/NavBar";
import NavLogo from "../components/NavLogo";
import log1 from "../logo1.png";
import { Card } from "antd";
//colors
import * as conColors from "../colors";
import { Col, Row } from "antd";

// images import
import oimg from '../pictures/o.jpeg'
import fimg from '../pictures/f.PNG'
import qimg from '../pictures/q.PNG'
import simg from '../pictures/s.PNG'
import aimg from '../pictures/a.PNG'
import msimg from '../pictures/ms.PNG'
import moimg from '../pictures/mo.PNG'



const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;
const cardcolor = conColors.cardcolor;

const cardStyle = {
  textAlign: 'center',
  fontSize: "20px",
  color: txtColor,
  backgroundColor: footerBgColor,
};
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
            backgroundSize: 'cover'
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div
            className="site-layout-background"
            style={{ padding: "24px" }}
          >
            <div style={{ textAlign: "center" }}>
              <Title style={{ color: txtColor }}>About Us</Title>
            </div>
            <div
            >
              <div className="site-card-border-less-wrapper">
                <Card
                  title="Crime Rate detector"
                  bordered={true}
                  headStyle={{ fontSize: "21px", color: txtColor }}
                  style={{
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: footerBgColor,
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      color: txtColor,
                    }}
                  >
                    This is one of the interesting computer science project
                    ideas to create. As the name suggests, this Computer
                    Science project involves building a prediction system that
                    can analyze and predict the crime rate of a particular
                    location. Naturally, the system needs to be fed with
                    relevant data. It uses the MLPClassifer algorithm which
                    stands for Multilayer perceptron to predict the crime
                    rate. We will use The K-means algorithm for clustering
                    co-offenders and organized crime groups by detecting
                    relevant crime patterns via hidden links, link prediction,
                    and statistical analysis of crime data.
                  </p>
                </Card>
              </div>
              <div style={{ textAlign: 'center', marginTop: "20px" }}>
                <Title style={{ color: txtColor }}>Mentors</Title>
              </div>
              <div className="site-card-wrapper" >
                <Row gutter={[10, 10]} justify='center'>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Sameer Ahmed Siddqui"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={msimg} />
                    </Card>
                  </Col>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Ovais Ashraf"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={moimg} />
                    </Card>
                  </Col>
                </Row>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Title style={{ color: txtColor, marginTop: "20px" }}>Team B</Title>
              </div>
              <div className="teamb">
                <Row gutter={[10, 20]} justify='space-between'>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Qaseem Samdani"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={qimg} />
                    </Card>
                  </Col>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Subhan Ahmed"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={simg} />
                    </Card>
                  </Col>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Fizza Ahmed"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={fimg} />
                    </Card>
                  </Col>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Areej Zahid"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={aimg} />
                    </Card>
                  </Col>
                  <Col xs={24} lg={4}>
                    <Card
                      title="Owais"
                      bordered={true}
                      headStyle={{
                        color: txtColor,
                        backgroundColor: footerBgColor,
                      }}
                      style={cardStyle}
                    >
                      <Image src={oimg} />
                    </Card>
                  </Col>
                </Row>
              </div>
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
