import { Item, Text, ShowMore } from './NotRecomendedFoodList.styled';

export const NotRecomendedFoodList = ({ data, show, forbidenFood, onClick }) => {
  if (show) {
    return { forbidenFood, show }.map(it => (
      <Item key={it._id} style={{ display: 'block' }}>
        <p>{it._id}</p>
        <Text>{it.categories[0]}</Text>
      </Item>
    ));
  } else
    return (
      <>
        {forbidenFood.slice(0, 4).map(it => (
          <Item key={it._id} style={{ display: 'block' }}>
            <Text>{it.categories[0]}</Text>
          </Item>
        ))}
        {forbidenFood.length > 4 && (
          <ShowMore href="#" onClick={onClick}>
            show more ...
          </ShowMore>
        )}
      </>
    );
};
