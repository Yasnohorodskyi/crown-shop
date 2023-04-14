import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import { setCategories } from "../../store/categories/categories.action.js";

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categories));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
