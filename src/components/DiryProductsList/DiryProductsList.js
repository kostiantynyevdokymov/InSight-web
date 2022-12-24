import { UlDairy, DairyProdLi, TitleDairy, WeightDairy, CalDairy, ButtonX } from './DiryProductsList.styled';

export const DiryproductsList = ({ products, onClickItem }) => {
  return (
    <UlDairy>
      {products.map(el => (
        <DairyProdLi key={el._id}>
          <TitleDairy>{el.title.ua}</TitleDairy>
          <WeightDairy>{el.weight} g</WeightDairy>
          <CalDairy>{el.calories} kcal</CalDairy>
          <ButtonX
            onClick={() => {
              onClickItem(el._id);
            }}
          >
            &#10799;
          </ButtonX>
        </DairyProdLi>
      ))}
    </UlDairy>
  );
};
