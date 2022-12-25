import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SC from './CalculatorCalorieForm.styled';
import { selectIsLoadingDiet, selectUserParams } from 'redux/selectors';
import { setParams } from 'redux/user/userSlice';

function CalculatorCalorieForm() {
  const dispatch = useDispatch();
  const userParams = useSelector(selectUserParams);
  const { isLoggedIn } = useAuth();
  const handleSubmit = values => {
    const { height, age, currentWeight, desireWeight, bloodType } = values;
    values.bloodType = Number(values.bloodType);
    dispatch(setParams({ height, age, currentWeight, desireWeight, bloodType }));
  };

  const ErrorMessagesSchema = Yup.object().shape({
    height: Yup.number('Значення має бути число')
      .min(100, 'Вкажіть значення більше 100 см')
      .max(260, 'Вкажіть значення менше 260 см')
      .required("Обов'язкове поле"),
    age: Yup.number('Значення має бути число')
      .min(12, 'Вкажіть значення більше 12')
      .max(100, 'Вкажіть значення менше 100')
      .required("Обов'язкове поле"),
    weight: Yup.number('Значення має бути число')
      .min(40, 'Мінімальна вага 40 кг')
      .max(200, 'Максимальна вага 200 кг')
      .required("Обов'язкове поле"),
    desiredWeight: Yup.number('Значення має бути число')
      .min(40, 'Мінімальна вага 40 кг')
      .max(150, 'Максимальна вага 150 кг')
      .required("Обов'язкове поле")
      .when('weight', (weight, schema) => {
        return schema.test({
          test: desiredWeight => !!weight && desiredWeight < weight,
          message: 'Бажана вага повинна бути менше поточної',
        });
      }),
    bloodType: Yup.number().required("Обов'язкове поле"),
  });

  return (
    <>
      <Formik
        validationSchema={ErrorMessagesSchema}
        initialValues={{
          height: userParams && userParams.height ? userParams.height : '',
          age: userParams && userParams.age ? userParams.age : '',
          weight: userParams && userParams.weight ? userParams.weight : '',
          desiredWeight: userParams && userParams.desiredWeight ? userParams.desiredWeight : '',
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
                  <SC.LabelValue>Зріст *</SC.LabelValue>
                  {touched.height && errors.height && <SC.Error>{errors.height}</SC.Error>}
                </SC.Label>
                <SC.Label>
                  {touched.age && errors.age ? (
                    <SC.ErrorInputField placeholder=" " name="age" type="number" min="12" max="100" required />
                  ) : (
                    <SC.InputField placeholder=" " name="age" type="number" min="12" max="100" required />
                  )}
                  <SC.LabelValue>Вік *</SC.LabelValue>
                  {touched.age && errors.age && <SC.Error>{errors.age}</SC.Error>}
                </SC.Label>

                <SC.Label>
                  {touched.weight && errors.weight ? (
                    <SC.ErrorInputField placeholder=" " name="weight" type="number" min="40" max="200" required />
                  ) : (
                    <SC.InputField placeholder=" " name="weight" type="number" min="40" max="200" required />
                  )}
                  <SC.LabelValue>Нинішня вага *</SC.LabelValue>
                  {touched.weight && errors.weight && <SC.Error>{errors.weight}</SC.Error>}
                </SC.Label>
              </SC.InputBlock>
              <SC.InputBlock>
                <SC.Label>
                  {touched.desiredWeight && errors.desiredWeight ? (
                    <SC.ErrorInputField
                      placeholder=" "
                      name="desiredWeight"
                      type="number"
                      min="40"
                      max="150"
                      required
                    />
                  ) : (
                    <SC.InputField placeholder=" " name="desiredWeight" type="number" min="40" max="150" required />
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
