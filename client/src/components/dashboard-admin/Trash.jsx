/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { TabsTrash } from "./Tabs";
import { useLocation } from "react-router-dom";
import { api } from "../../configs/api";

export const Trash = () => {
  const [filteredCategories, setFilteredCategories] = useState();
  const [filteredSubCategories, setFilteredSubCategories] = useState();
  const [filteredProduct, setFilteredProduct] = useState();
  const getCategory = async () => {
    try {
      const category = await api.get(`/categories?name=`);
      const deletedCategory = category.data.filter(
        (category) => category.isDeleted === true
      );
      setFilteredCategories(deletedCategory);
    } catch (error) {
      console.log(error);
    }
  };
  const getSubCategory = async () => {
    try {
      const subcategory = await api.get(`/subcategories?name=`);
      const deletedsubcategory = subcategory.data.filter(
        (subcategory) => subcategory.isDeleted === true
      );
      setFilteredSubCategories(deletedsubcategory);
    } catch (error) {
      console.log(error);
    }
  };
  // const getProduct = async () => {
  //    try {
  //       const product = await api.get(`/product?name=`);
  //       const deletedproduct = product.data.filter(
  //          (product) => product.isDeleted === true
  //       );
  //       console.log(product)
  //       setFilteredProduct(deletedproduct);
  //    } catch (error) {
  //       console.log(error);
  //    }
  // };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("category");
  const name = queryParams.get("name");
  const sort = queryParams.get("sort");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getProduct = async () => {
    let url = `/product?page=${currentPage}&limit=${itemsPerPage}`;
    if (categoryId) {
      url += `${url.includes("?") ? "&" : "?"}category=${categoryId}`;
    }
    if (name) {
      url += `${url.includes("?") ? "&" : "?"}name=${name}`;
    }
    if (sort) {
      url += `${url.includes("?") ? "&" : "?"}sort=${sort}`;
    }

    try {
      const response = await api.get(url);
      const deletedproduct = response?.data.filter(
        (product) => product.isDeleted === true
      );
      setFilteredProduct(deletedproduct);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const restoreCategory = async (categoryId) => {
    console.log(categoryId);
    try {
      await api.patch(`/categories/remove/${categoryId}`);
      getCategory();
    } catch (error) {
      console.log(error);
    }
  };
  const restoresubCategory = async (subCategoryId) => {
    try {
      await api.patch(`/subcategories/remove/${subCategoryId}`);
      getSubCategory();
    } catch (error) {
      console.log(error);
    }
  };
  const restoreproduct = async (productId) => {
    try {
      await api.patch(`/product/remove/${productId}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
    getSubCategory();
    getProduct();
  }, []);
  console.log(filteredProduct);
  return (
    <>
      <TabsTrash
        filteredCategories={filteredCategories}
        filteredSubCategories={filteredSubCategories}
        filteredProduct={filteredProduct}
        restoreCategory={restoreCategory}
        restoresubCategory={restoresubCategory}
        restoreproduct={restoreproduct}
        getCategory={getCategory}
        getSubCategory={getSubCategory}
        getProduct={getProduct}
      />
    </>
  );
};
