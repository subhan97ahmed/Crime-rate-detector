import React, { useState } from "react";
import "../App.less";
import bg from "../bg.jpg";
import NavBar from "../components/NavBar";
import { Layout, Typography, Image } from "antd";
import * as conColors from "../colors";
import NavLogo from "../components/NavLogo";
import { Form, Input, Select, Checkbox, Button } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const txtColor = conColors.txtColor;
const footerBgColor = conColors.footerBgColor;
const footerTxtColor = conColors.footerTxtColor;

const { Option } = Select;
// const residences = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];
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
    console.log("Received values of form: ", values);
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
  //   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  //   const onWebsiteChange = (value) => {
  //     if (!value) {
  //       setAutoCompleteResult([]);
  //     } else {
  //       setAutoCompleteResult(
  //         [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
  //       );
  //     }
  //   };

  //   const websiteOptions = autoCompleteResult.map((website) => ({
  //     label: website,
  //     value: website,
  //   }));
};
function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [gender, setGender] = useState("");
  function handlereq(event) {
    console.log("Qaseem");
    console.log(username, email, password);
    event.preventDefault();

    console.log(username);
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
      //gender.trim() !== ""
    ) {
      // "http://localhost:4001/api/users"
      axios
        .post("https://crime-backend.herokuapp.com/api/users", {
          username: username,
          email: email,
          password: password,
          //gender: gender,
        })
        .then(function (response) {
          console.log(response);

          alert("Successfully Signup");
          history.push("/login");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please fill form completely");
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
              name="register"
              //   onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                // label="Username"
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
                // label="E-mail"
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

              {/* <Form.Item
                name="gender"
                // label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Select placeholder="Select your gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
                value={gender}
                onChange=
                {(e) => {
                  setGender(e.target.value);
                }}
              </Form.Item> */}

              <Form.Item
                name="Password"
                // label="Password"
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
                <Input.Password placeholder="Entre your password" />
              </Form.Item>

              {/* <Form.Item
                name="Confirm"
                // label="Confirm password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm your password" />
              </Form.Item> */}

              {/* <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="residence"
                label="Habitual Residence"
                rules={[
                  {
                    type: "array",
                    required: true,
                    message: "Please select your habitual residence!",
                  },
                ]}
              >
                <Cascader options={residences} />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  //   addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="website"
                label="Website"
                rules={[
                  {
                    required: true,
                    message: "Please input website!",
                  },
                ]}
              >
                <AutoComplete
                  //   options={websiteOptions}
                  //   onChange={onWebsiteChange}
                  placeholder="website"
                >
                  <Input />
                </AutoComplete>
              </Form.Item> */}

              {/* <Form.Item
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Please input the captcha you got!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </Form.Item> */}

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
                <a href="./login">
                  Already have an account account ?
                </a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={handlereq}>
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
