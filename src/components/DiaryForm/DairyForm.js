import {
  useDispatch,
  //useSelector
} from 'react-redux';
import { useState, useEffect } from 'react';
// import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
//import { selectDiary } from "redux/selectors"
import { addDiaryEntry, getDailyDiary, deleteDiaryEntry } from '../../redux/diary/diaryOperations';
import {
  SForm,
  DContainer,
  ButtonDairy,
  DairyInput,
  Add,
  Plus,
  DairyProdLi,
  TitleDairy,
  WeightDairy,
  CalDairy,
  ButtonX,
  UlDairy,
  ModalButton,
  AutocompleteList,
  AutocompleteItems,
} from './DairyFormStyle';
import { Modal } from 'components/Modal/modal';

import axios from 'axios';

const prod = [
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff553b',
    },
    categories: ['яйца'],
    weight: 100,
    title: {
      ru: 'Яйцо куриное (желток сухой)',
      ua: 'Яйце куряче (жовток сухий)',
    },
    calories: 623,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
  {
    _id: {
      $oid: '5d51694802b2373622ff554d',
    },
    categories: ['зерновые'],
    weight: 100,
    title: {
      ru: 'Горох маш Ярмарка Платинум',
      ua: 'Горох маш Ярмарка Платинум',
    },
    calories: 312,
    groupBloodNotAllowed: [null, true, false, false, false],
    __v: 0,
  },
];

export const DairyForm = ({ screenWidth }) => {
  const arr = [];
  const day = '22122022';
  const user = '??';
  const dispatch = useDispatch();
  const indexOfFood = null;
  const form = document.querySelector('dairyproduct');

  const [isOpen, setIsOpen] = useState(false);

  // const products = useSelector(selectDiary)

  const [value, setValue] = useState('');

  useEffect(() => {
    const result = getProd(value);
    console.log('Prod:', result);
  }, [value]);

  const getProd = async text => {
    console.log(text);
    try {
      const resp = await axios.get(`/products?title=${text}`);
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  const handleProdChange = event => {
    setValue(event.target.value);
  };

  function searchInBase(e) {
    let indexOfFood = null;
    if (e.target.dataset !== 'dairyproduct') return;
    if (e.target.value === '') return;
    // send to base e.target.value to back, return arr of products

    indexOfFood = arr.filter(el => el.title.ua.uncludes(e.target.value))._id;
    return indexOfFood;
  }

  function sendMarktoBase(e) {
    e.preventDefault();
    // send req with product
    dispatch(
      addDiaryEntry({
        owner: user._id,
        date: day,
        product: indexOfFood,
        weight: form.elements.weight.value,
      })
    );
    form.reset();
  }

  return (
    <>
      <DContainer>
        {/* <input onChange={handleProdChange} value={value} /> */}
        {screenWidth > 767 && (
          <SForm id="dairyform" onChange={searchInBase} onSubmit={sendMarktoBase}>
            <div style={{ position: 'relative' }}>
              <DairyInput
                id="dairyproduct"
                name="dairyproduct"
                data-name="dairyproduct"
                placeholder="Enter product name"
              />
              <AutocompleteList>
                <AutocompleteItems>T1</AutocompleteItems>
                <AutocompleteItems>T2</AutocompleteItems>
                <AutocompleteItems>T3</AutocompleteItems>
              </AutocompleteList>
            </div>
            {arr && arr.length > 0 && <ListOfProducts arr={arr} />}
            <DairyInput id="dairyweight" name="dairyweight" placeholder="Enter product name" />
            <ButtonDairy>
              <Add>Add</Add>
              <Plus>+</Plus>
            </ButtonDairy>
          </SForm>
        )}
        {/* {prod.length > 0 && <ListOfEatenProdactsByDay products={prod} />} */}
        <ListOfEatenProdactsByDay prod={prod} />
        {screenWidth < 768 && (
          <ModalButton onClick={() => setIsOpen(!isOpen)}>{<Plus style={{ display: 'block' }}>+</Plus>}</ModalButton>
        )}
        {isOpen && (
          <Modal onClose={() => setIsOpen(!isOpen)}>
            <SForm id="dairyform" onChange={searchInBase} onSubmit={sendMarktoBase}>
              <DairyInput
                id="dairyproduct"
                name="dairyproduct"
                data-name="dairyproduct"
                placeholder="Enter product name"
              />
              {arr && arr.length > 0 && <ListOfProducts arr={arr} />}
              <DairyInput id="dairyweight" name="dairyweight" placeholder="Enter product name" />
              <ButtonDairy onClick={() => setIsOpen(!isOpen)}>
                <Add>Add</Add>
                <Plus>+</Plus>
              </ButtonDairy>
            </SForm>
          </Modal>
        )}
      </DContainer>
    </>
  );
};

const ListOfProducts = ({ products }, day, form) => {
  const dispatch = useDispatch();
  let arr = dispatch(getDailyDiary(day));
  if (arr.length === 0) return;
  return (
    <ul>
      {arr.map(({ title: { ua }, _id }) => {
        return <li key={_id + 'D'} onClick={e => (form.elements.product.value = ua)}></li>;
      })}
    </ul>
  );
};

const ListOfEatenProdactsByDay = ({ prod }) => {
  const dispatch = useDispatch();
  return (
    <>
      <UlDairy>
        {prod &&
          prod.map(el => (
            <DairyProdLi>
              <TitleDairy>{el.title.ua}</TitleDairy>
              <WeightDairy>{el.weight} g</WeightDairy>
              <CalDairy>{el.calories} kcal</CalDairy>
              <ButtonX onClick={e => dispatch(deleteDiaryEntry(e.target._id))}>X</ButtonX>
            </DairyProdLi>
          ))}
      </UlDairy>
    </>
  );
};
