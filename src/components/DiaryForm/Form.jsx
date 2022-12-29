import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { debounce } from 'lodash';
import axios from 'axios';

import {
  Container,
  SForm,
  ProductBlock,
  AutocompleteList,
  AutocompleteItems,
  ButtonDairy,
  Plus,
  Add,
} from './Form.styled';
import { Input } from './Input/Input';

import { addDiaryEntry } from 'redux/diary/diaryOperations';
import { selectIsLoadingDiary } from 'redux/selectors';
import { useCallback } from 'react';

export const Form = ({ onClick }) => {
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [chosedProduct, setChosedProduct] = useState();
  const [valueProd, setValueProd] = useState('');
  const [weightValue, setWeightValue] = useState('');
  const [isProductValid, setIsProductValid] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  const autocompleteMenu = useRef();

  const isLoading = useSelector(selectIsLoadingDiary);

  const getProducts = useCallback(
    () =>
      debounce(async () => {
        try {
          const resp = await axios.get(`/products?title=${valueProd}`);
          setAllProducts(resp.data);
          return resp.data;
        } catch (error) {
          setAllProducts([]);
        }
      }, 500)(),
    [valueProd]
  );

  const itemClickHandler = (event, index) => {
    setChosedProduct(allProducts[index]);
    setValueProd(event.target.textContent);
    setShowAutocomplete(!showAutocomplete);
    setIsProductValid(true);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (weightValue <= 0) {
      window.alert('Enter positive weight');
      return;
    }

    console.log(allProducts);

    if (!isProductValid) {
      window.alert('Choose a product from the list');
      return;
    }

    const date = params.day.split('.').join('');
    dispatch(addDiaryEntry({ day: date, id: chosedProduct._id, weight: weightValue }));

    setValueProd('');
    setWeightValue('');

    if (onClick) onClick();
  };

  const onDiryProductClick = () => {
    setShowAutocomplete(true);
  };

  const onInputChange = e => {
    if (e.target.name === 'diaryproduct') setValueProd(e.target.value);
    if (e.target.name === 'diaryweight') setWeightValue(parseInt(e.target.value));
    if (isProductValid) setIsProductValid(false);
  };

  useEffect(() => {
    if (valueProd.length > 2) getProducts();

    if (valueProd === '') {
      setChosedProduct([]);
      setAllProducts([]);
    }
  }, [getProducts, valueProd]);

  useEffect(() => {
    const handleKeyDownEsc = e => {
      if (!autocompleteMenu.current.contains(e.target)) {
        setShowAutocomplete(false);
      }
      if (e.code === 'Escape') {
        setShowAutocomplete(false);
      }
    };
    if (showAutocomplete) {
      window.addEventListener('keydown', handleKeyDownEsc);
      window.addEventListener('mousedown', handleKeyDownEsc);
      return () => {
        window.removeEventListener('keydown', handleKeyDownEsc);
        window.removeEventListener('mousedown', handleKeyDownEsc);
      };
    }
  });

  return (
    <Container>
      <SForm id="dairyform" autoComplete="off" onSubmit={onSubmitForm}>
        <ProductBlock ref={autocompleteMenu}>
          <Input
            id="diaryproduct"
            name="diaryproduct"
            placeholder="Enter product name"
            value={valueProd}
            onClick={onDiryProductClick}
            onChange={onInputChange}
          />
          {allProducts.length !== 0 && showAutocomplete && (
            <AutocompleteList>
              {allProducts.length !== 0 &&
                showAutocomplete &&
                allProducts.map(({ title, _id }, index) => (
                  <AutocompleteItems key={_id} onClick={event => itemClickHandler(event, index)}>
                    {title.ua}
                  </AutocompleteItems>
                ))}
            </AutocompleteList>
          )}
        </ProductBlock>
        <Input id="diaryweight" name="diaryweight" placeholder="Grams" value={weightValue} onChange={onInputChange} />
        <ButtonDairy disabled={isLoading}>
          <Add>Add</Add>
          <Plus>+</Plus>
        </ButtonDairy>
      </SForm>
    </Container>
  );
};
