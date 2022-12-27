import { Item, Text, ShowMore } from './NotRecomendedFoodList.styled';

export const NotRecomendedFoodList = ({ show, products, onClick }) => {
  const uniqueCategories = arr => {
    let result = [];
    let temp = [];

    for (let item of arr) {
      if (!temp.includes(item.categories[0])) {
        temp.push(item.categories[0]);
        result.push(item);
      }
    }
    return result;
  };

  const notRecomendedFood = uniqueCategories(products);

  const capitalized = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  if (show) {
    return notRecomendedFood.map(it => (
      <Item key={it._id} style={{ display: 'block' }}>
        <Text>{capitalized(it.categories[0])}</Text>
      </Item>
    ));
  } else
    return (
      <>
        {notRecomendedFood.slice(0, 4).map(it => (
          <Item key={it._id} style={{ display: 'block' }}>
            <Text>{capitalized(it.categories[0])}</Text>
          </Item>
        ))}
        {notRecomendedFood.length > 4 && (
          <ShowMore href="#" onClick={onClick}>
            show more ...
          </ShowMore>
        )}
      </>
    );
};
