import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SC from './CalculatorCalorieForm.styled';
import { selectUserParams } from 'redux/selectors';
import { setParams } from 'redux/user/userSlice';
import { useEffect } from 'react';
import { fetchDiet, fetchUserDiet } from 'redux/diet/dietOperations';
import { refreshUser } from 'redux/user/userOperations';

function CalculatorCalorieForm({ modal }) {
  const dispatch = useDispatch();
  const userParams = useSelector(selectUserParams);
  const { isLoggedIn } = useAuth();

  const handleSubmit = values => {
    dispatch(setParams(values));
    modal();
  };

  const ErrorMessagesSchema = Yup.object().shape({
    height: Yup.number('Значення має бути число')
      .min(100, 'Вкажіть значення більше 100 см')
      .max(260, 'Вкажіть значення менше 260 см')
      .required("Обов'язкове поле"),
    age: Yup.number('Значення має бути число')
      .min(18, 'Вкажіть значення більше 18')
      .max(100, 'Вкажіть значення менше 100')
      .required("Обов'язкове поле"),
    currentWeight: Yup.number('Значення має бути число')
      .min(40, 'Мінімальна вага 40 кг')
      .max(500, 'Максимальна вага 500 кг')
      .required("Обов'язкове поле"),
    desireWeight: Yup.number('Значення має бути число')
      .min(40, 'Мінімальна вага 40 кг')
      .max(500, 'Максимальна вага 500 кг')
      .required("Обов'язкове поле")
      .when('currentWeight', (currentWeight, schema) => {
        return schema.test({
          test: desireWeight => !!currentWeight && desireWeight < currentWeight,
          message: 'Бажана вага повинна бути менше поточної',
        });
      }),
    bloodType: Yup.number().required("Обов'язкове поле"),
  });

  useEffect(() => {
    if (isLoggedIn) dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchUserDiet(userParams));
    else dispatch(fetchDiet(userParams));
  }, [dispatch, isLoggedIn, userParams]);

  return (
    <>
      <Formik
        validationSchema={ErrorMessagesSchema}
        initialValues={{
          height: userParams && userParams.height ? userParams.height : '',
          age: userParams && userParams.age ? userParams.age : '',
          currentWeight: userParams && userParams.currentWeight ? userParams.currentWeight : '',
          desireWeight: userParams && userParams.desireWeight ? userParams.desireWeight : '',
          bloodType: userParams && userParams.bloodType ? userParams.bloodType.toString() : '',
        }}
        enableReinitialize
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <SC.FormikForm>
            <SC.Title>Розрахуйте свою денну норму калорій прямо зараз</SC.Title>
            <SC.InputWrapper>
              <SC.InputBlock>
                <SC.Label>
                  {touched.height && errors.height ? (
                    <SC.ErrorInputField placeholder=" " name="height" type="number" min="100" max="260" required />
                  ) : (
                    <SC.InputField placeholder=" " name="height" type="number" min="100" max="260" required />
                  )}
                  <SC.LabelValue>Зріст*</SC.LabelValue>
                  {touched.height && errors.height && <SC.Error>{errors.height}</SC.Error>}
                </SC.Label>
                <SC.Label>
                  {touched.age && errors.age ? (
                    <SC.ErrorInputField placeholder=" " name="age" type="number" min="18" max="100" required />
                  ) : (
                    <SC.InputField placeholder=" " name="age" type="number" min="18" max="100" required />
                  )}
                  <SC.LabelValue>Вік*</SC.LabelValue>
                  {touched.age && errors.age && <SC.Error>{errors.age}</SC.Error>}
                </SC.Label>

                <SC.Label>
                  {touched.currentWeight && errors.currentWeight ? (
                    <SC.ErrorInputField
                      placeholder=" "
                      name="currentWeight"
                      type="number"
                      min="40"
                      max="200"
                      required
                    />
                  ) : (
                    <SC.InputField placeholder=" " name="currentWeight" type="number" min="40" max="500" required />
                  )}
                  <SC.LabelValue>Нинішня вага*</SC.LabelValue>
                  {touched.currentWeight && errors.currentWeight && <SC.Error>{errors.currentWeight}</SC.Error>}
                </SC.Label>
              </SC.InputBlock>
              <SC.InputBlock>
                <SC.Label>
                  {touched.desireWeight && errors.desireWeight ? (
                    <SC.ErrorInputField placeholder=" " name="desireWeight" type="number" min="40" max="150" required />
                  ) : (
                    <SC.InputField placeholder=" " name="desireWeight" type="number" min="40" max="150" required />
                  )}
                  <SC.LabelValue>Бажана вага *</SC.LabelValue>
                  {touched.desiredWeight && errors.desiredWeight && <SC.Error>{errors.desiredWeight}</SC.Error>}
                </SC.Label>
                <SC.RadioGroupContainer>
                  <SC.RadioTitle>Група крові *</SC.RadioTitle>
                  {touched.bloodType && errors.bloodType && <SC.RadioError>{errors.bloodType}</SC.RadioError>}
                  <SC.RadioWrapper role="group">
                    <SC.RadioField id="first" type="radio" name="bloodType" value="1" />
                    <SC.RadioLabel htmlFor="first">1</SC.RadioLabel>
                    <SC.RadioField id="second" type="radio" name="bloodType" value="2" />
                    <SC.RadioLabel htmlFor="second">2</SC.RadioLabel>
                    <SC.RadioField id="third" type="radio" name="bloodType" value="3" />
                    <SC.RadioLabel htmlFor="third">3</SC.RadioLabel>
                    <SC.RadioField id="fourth" type="radio" name="bloodType" value="4" />
                    <SC.RadioLabel htmlFor="fourth">4</SC.RadioLabel>
                  </SC.RadioWrapper>
                </SC.RadioGroupContainer>
              </SC.InputBlock>
            </SC.InputWrapper>
            <SC.Button type="submit">Почніть худнути</SC.Button>
          </SC.FormikForm>
        )}
      </Formik>
    </>
  );
}

export default CalculatorCalorieForm;
