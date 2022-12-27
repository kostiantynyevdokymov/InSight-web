import { UlDiary, DiaryProdLi, TitleDiary, WeightDiary, CalDiary, ButtonX } from './DiryProductList.styled';

export const DiryproductList = ({ products, onClickItem }) => {
  return (
    <UlDiary>
      {products.map(el => (
        <DiaryProdLi key={el._id}>
          <TitleDiary>{el.title.ua}</TitleDiary>
          <WeightDiary>{el.weight} g</WeightDiary>
          <CalDiary>{el.calories} kcal</CalDiary>
          <ButtonX
            onClick={() => {
              onClickItem(el._id);
            }}
          >
            &#10799;
          </ButtonX>
        </DiaryProdLi>
      ))}
    </UlDiary>
  );
};
