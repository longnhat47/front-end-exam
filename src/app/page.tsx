"use client";
import Image from "next/image";
import { Flex, Layout, Space, Table, Tag } from "antd";
import HeaderComponent from "@/components/HeaderComponent";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const layoutStyle = {
  overflow: "hidden",
};

type license_type = {
  license_type: string;
  libraries: string[];
};

interface DataType {
  key: number;
  project_name: string;
  project_domain: string;
  last_accessed: Date;
  license_use?: license_type[];
}
export default function Home() {
  const [record, setRecord] = useState<DataType[]>([]);

  const fetchProject: any = async () => {
    const res = await axios.get(`/projects`);
    return res.data;
  };
  useEffect(() => {
    const data = fetchProject();
    setRecord(data.results);
  }, []);
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <HeaderComponent />
        <Content style={contentStyle}>
          <Table dataSource={record}>
            <Column
              title="Project Name"
              dataIndex="project_name"
              key="project_name"
            />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Project Domain"
              dataIndex="project_domain"
              key="project_domain"
            />
            <Column
              title="Last Accessed"
              dataIndex="last_accessed"
              key="last_accessed"
            />
            <ColumnGroup title="License Use">
              <Column
                title="License Type"
                dataIndex="license_type"
                key="license_type"
              />
              <Column
                title="Libraries"
                dataIndex="libraries"
                key="libraries"
                render={(libraries: string[]) => (
                  <>
                    {libraries.map((librarie) => {
                      return <Tag key={librarie}>{librarie.toUpperCase()}</Tag>;
                    })}
                  </>
                )}
              />
            </ColumnGroup>
          </Table>
        </Content>
      </Layout>
    </Flex>
  );
}
