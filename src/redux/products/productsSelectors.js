import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = store => store;
export const selectIsLoading = store => store.isLoading;
export const selectError = store => store.error;

export const selectCategories = createSelector([selectProducts], products => {
  const categoryList = [];
  for (const product of products) {
    for (const category of product.categories) {
      if (!categoryList.includes(category)) categoryList.push(category);
    }
  }
  return categoryList;
});
