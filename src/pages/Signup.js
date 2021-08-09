import React, { useState } from "react";
import "../App.less";
import bg from "../bg.jpg";
import NavBar from "../components/NavBar";
import * as conColors from "../colors";
import NavLogo from "../components/NavLogo";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Layout,
  Typography,
  Image,
  message,
} from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };

// const onFinish = () => {
//   console.log("Received values of form: ");
// };

// const RegistrationForm = () => {

//   const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select
//         style={{
//           width: 70,
//         }}
//       >
//         <Option value="86">+86</Option>
//         <Option value="87">+87</Option>
//       </Select>
//     </Form.Item>
//   );
// };

function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  function handlereq() {
    console.log("Qaseem");
    console.log(username, email, password);
    // event.preventDefault();

    //console.log(username);

    if (
      // username.trim() !== "" &&
      // email.trim() !== "" &&
      // password.trim() !== ""
      password === cPassword
    ) {
      // "http://localhost:4001/api/users"
      var loading = message.loading("Signing up", 0);
      axios
        .post("https://crime-backend.herokuapp.com/api/users", {
          username: username,
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          setTimeout(loading, 1);
          message.info("Successfully Signup");
          window.location.replace("./login");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      message.error("Password does not match ");
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
            padding: "0 50px",
            marginTop: "30px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            height: "700px",
          }}
        >
          <div style={{ margin: "16px 0" }}></div>
          <div className="site-layout-background" style={{ padding: "24px" }}>
            <div style={{ textAlign: "center" }}>
              <Title style={{ color: txtColor, marginTop: "100px" }}>
                Signup
              </Title>
            </div>
          </div>
          <div>
            <Form
              className="signup-form"
              {...formItemLayout}
              //   form={form}
              // name="register"
              //   onFinish={onFinish}
              // initialValues={{
              //   residence: ["zhejiang", "hangzhou", "xihu"],
              //   prefix: "86",
              // }}
              // scrollToFirstError
              onFinish={handlereq}
            >
              <Form.Item
              // name="username"
              // // label="Username"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your Username!",
              //   },
              // ]}
              // value={username}
              // onChange={(e) => {
              //   setUsername(e.target.value);
              // }}
              >
                <Input
                  required="true"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item
              // name="email"
              // // label="E-mail"
              // color="white"
              // rules={[
              //   {
              //     type: "email",
              //     message: "The input is not valid E-mail!",
              //   },
              //   {
              //     required: true,
              //     message: "Please input your E-mail!",
              //   },
              // ]}
              // value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              >
                <Input
                  type="email"
                  required="true"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="E-mail"
                />
              </Form.Item>

              <Form.Item
              // name="Password"
              // // label="Password"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
              // value={password}
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              // hasFeedback
              >
                <Input.Password
                  required="true"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder=" Password"
                />
              </Form.Item>
              <Form.Item>
                <Input.Password
                  required="true"
                  value={cPassword}
                  //  title="Password not match"
                  onChange={(e) => {
                    setcPassword(e.target.value);
                  }}
                  placeholder="Please confirm your password"
                />
              </Form.Item>

              <Form.Item
              // name="agreement"
              // valuePropName="checked"
              // rules={[
              //   {
              //     validator: (_, value) =>
              //       value
              //         ? Promise.resolve()
              //         : Promise.reject(new Error("Should accept agreement")),
              //   },
              // ]}
              // {...tailFormItemLayout}
              >
                <a href="./login">Already have an account account ?</a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
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

export default Signup;
