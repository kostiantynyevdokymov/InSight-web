import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from 'hooks/useAuth';
import { selectIsLoadingUser, selectUserParams } from 'redux/selectors';
import { setParams } from 'redux/user/userSlice';
import { fetchDiet, fetchUserDiet } from 'redux/diet/dietOperations';
import SC from './CalculatorCalorieForm.styled';

function CalculatorCalorieForm({ modal }) {
  const dispatch = useDispatch();
  const userParams = useSelector(selectUserParams);
  const { isLoggedIn } = useAuth();
  const isLoading = useSelector(selectIsLoadingUser);

  const handleSubmit = values => {
    dispatch(setParams(values));
    if (isLoggedIn) dispatch(fetchUserDiet(values));
    else dispatch(fetchDiet(values));
    modal();
  };

  const ErrorMessagesSchema = Yup.object().shape({
    height: Yup.number('This should be a number')
      .min(100, 'Height should be more than 100 cm')
      .max(260, 'Height should be less than 260 cm')
      .required('This is a required field'),
    age: Yup.number('This should be a number')
      .min(18, 'Age should be 18')
      .max(100, 'Age should be 100')
      .required('This is a required field'),
    currentWeight: Yup.number('This should be a number')
      .min(40, 'Minimum possible weight is 40 kg')
      .max(500, 'Maximum possible weight is 500 kg')
      .required('This is a required field'),
    desireWeight: Yup.number('This should be a number')
      .min(40, 'Minimum possible weight is 40 kg')
      .max(500, 'Maximum possible weight is 500 kg')
      .required("This is a required field")
      .when('currentWeight', (currentWeight, schema) => {
        return schema.test({
          test: desireWeight => !!currentWeight && desireWeight < currentWeight,
          message: 'Target weight should be less than your current weight',
        });
      }),
    bloodType: Yup.number().required("This is a required field"),
  });

  useEffect(() => {
    if (isLoggedIn && !!userParams.height) dispatch(fetchUserDiet(userParams));
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
            <SC.Title>Calculate your daily calorie intake right now</SC.Title>
            <SC.InputWrapper>
              <SC.InputBlock>
                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="height"
                    type="number"
                    iserror={!!errors.height && !!touched.height ? 1 : 0}
                  />
                  <SC.LabelValue>Height *</SC.LabelValue>
                  <SC.Error component="div" name="height" />
                </SC.Label>

                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="age"
                    type="number"
                    iserror={!!errors.age && touched.age ? 1 : 0}
                  />
                  <SC.LabelValue>Age *</SC.LabelValue>
                  <SC.Error component="div" name="age" />
                </SC.Label>

                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="currentWeight"
                    type="number"
                    iserror={!!errors.currentWeight && touched.currentWeight ? 1 : 0}
                  />
                  <SC.LabelValue>Current weight *</SC.LabelValue>
                  <SC.Error component="div" name="currentWeight" />
                </SC.Label>
              </SC.InputBlock>
              <SC.InputBlock>
                <SC.Label>
                  <SC.InputField
                    placeholder=" "
                    name="desireWeight"
                    type="number"
                    iserror={!!errors.desireWeight && touched.desireWeight ? 1 : 0}
                  />
                  <SC.LabelValue>Desired weight *</SC.LabelValue>
                  <SC.Error component="div" name="desireWeight" />
                </SC.Label>
                <SC.RadioGroupContainer>
                  <SC.RadioTitle>Blood type *</SC.RadioTitle>
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
            <SC.Button type="submit" disabled={isLoading}>
              Start loosing weight
            </SC.Button>
          </SC.FormikForm>
        )}
      </Formik>
    </>
  );
}

export default CalculatorCalorieForm;
