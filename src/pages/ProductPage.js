import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Button, Form, Input, InputNumber, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  selectProducts,
  updateProduct,
} from "../redux/slice/product.slice";

export const ProductPage = () => {
  const [form] = Form.useForm();
  const products = useSelector(selectProducts);
  const [selectedId, setSelectedId] = useState();

  const dispatch = useDispatch();

  const columns = [
    { title: "Name", dataIndex: "title" },
    { title: "Description", dataIndex: "description" },
    { title: "Price", dataIndex: "price" },
    {
      title: "Action",
      render: (_, product) => (
        <>
          <Button
            onClick={() => {
              setSelectedId(product.id);
              form.setFieldsValue(product);
            }}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <div
        style={{
          padding: "1em",
        }}
      >
        <div style={{ background: "#fff", padding: "1em" }}>
          <Form
            form={form}
            onFinish={(values) => {
              if (selectedId) {
                dispatch(updateProduct({ ...values, id: selectedId }));
              } else {
                dispatch(addProduct(values));
              }
            }}
          >
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input />
            </Form.Item>
            <Form.Item label="Price" name="price">
              <InputNumber width="100%" />
            </Form.Item>

            <Button
              onClick={() => {
                form.submit();
              }}
            >
              Submit
            </Button>
          </Form>
        </div>

        <Table columns={columns} dataSource={products} />
      </div>
    </Layout>
  );
};
