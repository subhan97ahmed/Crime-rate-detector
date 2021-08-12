import React, { useState } from "react";
import { Layout, Typography, Form, Input, Button, Checkbox, Col, Row, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import NavLogo from "../components/NavLogo";
import bg from "../bg.jpg";
import NavBar from "../components/NavBar";
import * as conColors from "../colors";
import "../App.less";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;
const onFinish = (values) => {

};
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlereq(event) {
    event.preventDefault();

    if (
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      message.loading('Signing in')
      axios
        .post("https://crime-backend.herokuapp.com/api/auth", {
          email: email,
          password: password,
        })
        .then(function (response) {
          window.localStorage.setItem('email', email);
          window.location.replace("/");
        })
        .catch(function (error) {
          message.error("Invalid email or password");
        });
    } else {
      message.warn("Please fill form completely");
    }
  }

  return (
    <>
      <Layout className="Login">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavLogo></NavLogo>
          <NavBar selectedOp="4" />
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
          <div style={{ margin: "6px 0" }}></div>
          <div className="site-layout-background" style={{ padding: "0 12vw", minHeight: "80vh" }}>
            <Card style={{ backgroundColor: footerBgColor, marginTop: "16vh" }} size="small" bordered={true} hoverable={true}>
              <Row gutter={[10, 20]}>
                <Col span={24}>
                  <Title style={{ color: txtColor, marginTop: "2vh", textAlign: "center" }}>
                    Login
                  </Title>
                </Col>
              </Row>

              <Row>
                <Col span={24} >
                  <Form
                    name="normal_login"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Row><Col span={24}>
                      <Form.Item
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Email",
                          },
                        ]}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      >
                        <Input
                          prefix={<UserOutlined className="site-form-item-icon" />}
                          placeholder="Email"
                        />
                      </Form.Item>
                    </Col></Row>
                    <Row><Col span={24}>
                      <Form.Item
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Password!",
                          },
                        ]}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      >
                        <Input
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                    </Col></Row>
                    <Form.Item style={{ marginLeft: "10px", marginRight: "10px" }}>
                      <Form.Item name="remember" valuePropName="checked" noStyle>

                        <Checkbox
                          style={{
                            color: "white",
                          }}
                        >
                          Remember me
                        </Checkbox>
                      </Form.Item>
                    </Form.Item>
                    <Row><Col span={24}>
                      <Form.Item style={{ marginLeft: "10px", marginRight: "10px" }}>
                        <Row gutter={[6, 1]}>
                          <Col span={12} style={{ textAlign: "center" }}>
                            <Button
                              type="primary"
                              htmlType="submit"
                              onClick={handlereq}
                              style={{ color: "black", width: "100%" }}
                            >
                              Log in
                            </Button>
                          </Col>
                          <Col span={12} style={{ textAlign: "center" }}>
                            <Button
                              href="./signup"
                              type="primary"
                              htmlType="submit"
                              style={{ color: "black", width: "100%" }}
                            >

                              Register
                            </Button>
                          </Col>
                        </Row>
                      </Form.Item>
                    </Col></Row>
                  </Form>
                </Col>
              </Row>
            </Card>
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
export default Login;
