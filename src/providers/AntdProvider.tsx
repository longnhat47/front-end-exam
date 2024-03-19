import { ConfigProvider } from "antd";

export default function AntdProvider({ children }: React.PropsWithChildren) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
