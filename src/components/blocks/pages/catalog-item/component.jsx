import React from "react";
import { catalogData } from "./data";
import { Checkbox } from "antd";
import "antd/dist/antd.css";
import { useParams, useHistory } from "react-router-dom";
import { InputNumber, Form, Button } from "antd";

import "./style.css";

const CatalogCategory = () => {

  const history = useHistory();

  let params = useParams();
  const { id } = params;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onClick = (id) => {
    history.push(`/card-product/${id}`);
  }

  const categoryOptions = catalogData[id].sideMenu.categories.map((item) => {
    return { label: item, value: item };
  });

  const colorsOptions = catalogData[id].sideMenu.color.map((item) => {
    return { label: item, value: item };
  });

  return (
    <section className="catalog-item item__category">
      <div className="site-container">
        <div className="title">
          <h3>{catalogData[id].title}</h3>
        </div>
        <div className="catalog-item__wrapper">
          <div className="description__column column">
            <Form
              name="validate_other"
              onFinish={onFinish}
              initialValues={{
                "price-from": 3,
                "size-from": 3,
                "price-to": 100,
                "size-to": 100,
              }}
            >
              <div className="catalog__categories">
                <span className="categories__title">Категория</span>
                <Form.Item name="categories">
                  <Checkbox.Group options={categoryOptions}></Checkbox.Group>
                </Form.Item>
              </div>
              <div className="catalog__categories">
                <span className="categories__title">Цена, руб</span>
                <div className="price__wrapper top">
                  <Form.Item name="price-from">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item name="price-to">
                    <InputNumber />
                  </Form.Item>
                </div>
                <div className="price__wrapper bottom">
                  <span>мин</span>
                  <span>макс</span>
                </div>
              </div>
              <div className="catalog__categories">
                <span className="categories__title">Цвета</span>
                <Form.Item name="colors">
                  <Checkbox.Group options={colorsOptions}></Checkbox.Group>
                </Form.Item>
              </div>
              <div className="catalog__categories">
                <span className="categories__title">Размер, см</span>
                <div className="price__wrapper top">
                  <Form.Item name="size-from">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item name="size-to">
                    <InputNumber />
                  </Form.Item>
                </div>
                <div className="price__wrapper bottom">
                  <span>мин</span>
                  <span>макс</span>
                </div>
              </div>
              <Form.Item
                wrapperCol={{
                  span: 12,
                  offset: 6,
                }}
              >
                <Button type="primary" htmlType="submit" className="button">
                  Показать
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="goods__column column">
            {catalogData[id].goods.map((item, index) => {
              return (
                <div className="popular-goods__insert" key={index} onClick={()=> onClick(index)}>
                  <img src={item.photo} alt={item.goodTitle}></img>
                  <span className="metal">{item.material}</span>
                  <p>{item.goodTitle}</p>
                  <span className="price">{item.goodPrice}</span>
                  <span className="article">{item.article}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogCategory;
