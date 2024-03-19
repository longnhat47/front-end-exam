import { Flex, Layout, Select, Switch } from "antd";
import {
  AppstoreOutlined,
  CheckOutlined,
  CloseOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState } from "react";
const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
  padding: 0,
};

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
];

export default function HeaderComponent() {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Header style={headerStyle}>
      <Flex justify="space-between" align="center">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <Flex justify="space-between" align="center" gap={30}>
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
      </Flex>
    </Header>
  );
}
