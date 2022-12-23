import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useState } from 'react';
import { selectProducts } from '../../redux/products/productsSelectors'
import { deleteDiaryEntry } from 'redux/diary/diaryOperations';
import { selectDiaryInput } from "redux/selectors"
import { loadProducts } from '../../redux/products/productsOperations'
import { addDiaryEntry, getDailyDiary } from '../../redux/diary/diaryOperations';
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
} from './DairyFormStyle';
import { useParams } from 'react-router';
//import { useEffect } from 'react';
//import { Modal } from 'components/Modal/modal';

export const DairyForm = ({ screenWidth }) => {
  const { day } = useParams()
  const dispatch = useDispatch();
  const indexOfFood = null;
  const form = document.querySelector('dairyproduct');
  let prod = []

  const [isOpen, setIsOpen] = useState(false);

  //useEffect(() => {
   // dispatch(getDailyDiary(day))
  //    }, [dispatch, day]);



  prod = useSelector(selectDiaryInput)

  async function searchInBase(e) {
    console.log('search', e.target.value)
    if (e.target.dataset !== 'dairyproduct') return;
    if (e.target.value === '') return;
    dispatch(loadProducts(e.target.value))
  }

  function sendMarktoBase(e) {
    e.preventDefault();
    // send req with product
    dispatch(
      addDiaryEntry({
       // owner: user._id,
        date: day,
        product: indexOfFood,
        weight: form.elements.weight.value,
      })
    );
    form.reset();
  }

  const arrOfProducts = useSelector(selectProducts)

  return (
    <>
      <DContainer>
        <SForm id="dairyform" onChange={searchInBase} onSubmit={sendMarktoBase}>
          <DairyInput
            id="dairyproduct"
            name="dairyproduct"
            data-name="dairyproduct"
            placeholder="Enter product name"
          />
          {arrOfProducts && arrOfProducts.length > 0 && (<ListOfProductMatches arr={arrOfProducts} />)}
          <DairyInput
            id="dairyweight"
            name="dairyweight"
            placeholder="Grams" />
          <ButtonDairy>
            <Add>Add</Add>
            <Plus>+</Plus>
          </ButtonDairy>
        </SForm>
       {/* <ListOfEatenProdactsByDay prod={prod} /> */}
        {prod.length > 0 && <ListOfEatenProdactsByDay products={[]} />} 

        
      {/*}  {screenWidth > 767 && (
          <SForm id="dairyform" onChange={searchInBase} onSubmit={sendMarktoBase}>
            <DairyInput
              id="dairyproduct"
              name="dairyproduct"
              data-name="dairyproduct"
              placeholder="Enter product name"
            />
            {arr && arr.length > 0 && (<ListOfProducts arr={arr} />)}
            <DairyInput id="dairyweight" name="dairyweight" placeholder="Enter product name" />
            <ButtonDairy>
              <Add>Add</Add>
              <Plus>+</Plus>
            </ButtonDairy>
          </SForm>
        )}
        {/* */}
        {screenWidth < 768 && (
          <ModalButton onClick={() => setIsOpen(!isOpen)}>{<Plus style={{ display: 'block' }}>+</Plus>}</ModalButton>
        )}
        {/*isOpen && (
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
        )} */}
      </DContainer>
    </>
  );
};

const ListOfProductMatches = ({ prod }) => {
  const dispatch = useDispatch()
  if (prod.length === 0) return;
  return (
    <ul>
      {prod.map(({ title: { ua }, _id }) => {
        return (
          <li
            key={_id}
            onClick={() => dispatch(loadProducts(ua))}
          >{ua}
          </li>)
      })}
    </ul>
  );
};

const ListOfEatenProdactsByDay = (day) => {
  const dispatch = useDispatch();
  const prod = dispatch(getDailyDiary(day))
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
