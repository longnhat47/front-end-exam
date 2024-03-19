"use client";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Form,
  FormProps,
  Input,
  Layout,
  Select,
  Switch,
} from "antd";
import axios from "../../axios/axios";
import { redirect } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
};
export default function Login() {
  const loginRequest = async (data: any) => {
    const res = await axios.post(`/auth/login`, data);
    return res.data;
  };
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const respone = await loginRequest(values);
    localStorage.setItem("token", respone.access_token);
    redirect("/");
  };
  return (
    <Flex
      gap="middle"
      wrap="wrap"
      style={{
        height: "100vh",
        color: "#000",
        padding: "10px",
        background: "#fff",
      }}
    >
      <Layout>
        <Flex justify="flex-end" align="center" gap={30}>
          <Select
            defaultValue="vie"
            style={{ width: 120 }}
            options={[
              { value: "vie", label: "Tiếng Việt" },
              { value: "en", label: "Tiếng Anh" },
            ]}
          />
          <Flex justify="space-between" align="center" gap={10}>
            <span>Chế độ tối</span>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Flex>
        </Flex>
        <Flex justify="center" align="center" vertical={true} gap={20}>
          <h1>LOGIN</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ width: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Layout>
    </Flex>
  );
}
