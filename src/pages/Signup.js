import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Select, Button, Layout, Typography, message, Card } from "antd";
import axios from "axios";
import NavBar from "../components/NavBar";
import NavLogo from "../components/NavLogo";
import bg from "../bg.jpg";
import * as conColors from "../colors";
import "../App.less";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
};
function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handlereq(event) {

    event.preventDefault();

    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      axios
        .post("https://crime-backend.herokuapp.com/api/users", {
          username: username,
          email: email,
          password: password,
        })
        .then(function (response) {

          message.success("Successfully Signup");
          history.push("/login");
        })
        .catch(function (error) {
          message.error('signup failed');
        });
    } else {
      message.warn("Please fill form completely");
    }
  }
  return (
    <>
      <Layout className="Signup">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavLogo></NavLogo>
          <NavBar selectedOp="5" />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: "0 10vw",
            marginTop: "64px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "700px",
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div className="site-layout-background" style={{ padding: "0 12vw", minHeight: "80vh" }}>
            <Card style={{ backgroundColor: footerBgColor, marginTop: "16vh" }} size="small" bordered={true} hoverable={true}>
              <div style={{ textAlign: "center" }}>
                <Title style={{ color: txtColor }}>
                  Signup
                </Title>
              </div>
              <div style={{ textAlign: "center" }}>

                <Form
                  className="signup-form"
                  {...formItemLayout}
                  name="register"
                  initialValues={{
                    residence: ["zhejiang", "hangzhou", "xihu"],
                    prefix: "86",
                  }}
                  scrollToFirstError
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username!",
                      },
                    ]}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    color="white"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  >
                    <Input placeholder="E-mail!" />
                  </Form.Item>
                  <Form.Item
                    name="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    hasFeedback
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(new Error("Should accept agreement")),
                      },
                    ]}
                    {...tailFormItemLayout}
                  >
                    <a href="./login" style={{ marginRight: "175px" }}>
                      Already have an account account ?
                    </a>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handlereq} style={{ color: "black" }}>
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </div>
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
export default Signup;
