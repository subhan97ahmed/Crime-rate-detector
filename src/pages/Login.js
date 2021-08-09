import React, { useState } from "react";
import "../App.less";
import bg from "../bg.jpg";
import NavBar from "../components/NavBar";
import * as conColors from "../colors";
import NavLogo from "../components/NavLogo";
import { Form, Input, Button, Checkbox,message,Layout, Typography, Image  } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlereq(event) {
    console.log("Qaseem");
    console.log(email, password);
    event.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      axios
        .post("https://crime-backend.herokuapp.com/api/auth", {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          window.localStorage.setItem("email", email);
          window.location.replace("/");
        })
        .catch(function (error) {
          console.log(error);
          message.error("Invalid email or password");
        });
    } else {
      message.error("Please fill form completely");
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
            // alignContent: "center",
            padding: "0 50px",
            marginTop: "64px",
            backgroundImage: `url(${bg})`,
            // backgroundSize: "cover",
            height: "520px",
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div className="site-layout-background" style={{ padding: "24px" }}>
            <div style={{ textAlign: "center" }}>
              <Title style={{ color: txtColor, marginTop: "100px" }}>
                Login
              </Title>
            </div>
          </div>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Entre your E-mail"
                />
              </Form.Item>
              <Form.Item
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
              <Form.Item>
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

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={handlereq}
                >
                  Log in
                </Button>
                <Button
                  href="./signup"
                  type="primary"
                  htmlType="submit"
                  className="Signup-button"
                >
                  Register
                </Button>
                {/* <a style={{marginLeft:'300px'}} href="src\pages\Signup.js">register now!</a> */}
              </Form.Item>
            </Form>
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
