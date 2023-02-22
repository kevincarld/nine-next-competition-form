import React from 'react'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Grid,
  Spinner,
  InputRightElement,
  IconButton,
  InputGroup
} from '@chakra-ui/react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { isFieldError, isFieldTouched } from 'utils/common';
import Container from '../util/Container';

export default function FormComponent() {

  // Formik property values
  const InitialValues = {
    FIRST_NAME: '',
    LAST_NAME: '',

    //default
    meta: {
      createdOn: new Date(),
    }
  }
  const validationSchema = Yup.object({
    FIRST_NAME: Yup.string().required('Please enter your first name.'),
    LAST_NAME: Yup.string().required('Please enter your last name.'),
  })

  const handleFormSubmit = async (formik) => {
    if(formik.isValid && formik.dirty) {

      const { values } = formik
      const firstname = values['FIRST_NAME']
      const lastname = values['LAST_NAME']

      // debug
      window.alert(JSON.stringify(values, null, 2))


      // submit to formstack
      // axios.post('https://submit.formstack.com/forms/YOUR_FORM_ID', values)
      // .then(response => {
      //   console.log(response);
      //   actions.setSubmitting(false);
      // })
      // .catch(error => {
      //   console.log(error);
      //   actions.setSubmitting(false);
      // });
    }

  }

  return (
    <Container>

      <Formik
        initialValues={InitialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          return true // give responsibility to handleFormSubmit()
        }}
        >

        {(formik) => {
          const invalidFname = isFieldTouched(formik, 'FIRST_NAME') && isFieldError(formik, 'FIRST_NAME')
          const invalidLname = isFieldTouched(formik, 'LAST_NAME') && isFieldError(formik, 'LAST_NAME')

          return(
            <Form>
              <Box
                maxW='750px'
                mx='auto'
                mt='40px'
                p={8}
              >
                <Stack spacing={4}>
                  <Flex gap={4}>
                    <FormControl id="FIRST_NAME" isRequired isInvalid={invalidFname}>
                      <FormLabel htmlFor={`FIRST_NAME`}>Enter your first name</FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        id="FIRST_NAME"
                        name="FIRST_NAME"
                        placeholder='First name *'
                      />
                      {invalidFname && <FormErrorMessage>{formik?.errors?.FIRST_NAME}</FormErrorMessage>}
                    </FormControl>

                    <FormControl id="LAST_NAME" isRequired isInvalid={invalidLname}>
                      <FormLabel htmlFor={`LAST_NAME`}>Enter your last name</FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        id="LAST_NAME"
                        name="LAST_NAME"
                        placeholder='Last name *'
                      />
                      {invalidLname && <FormErrorMessage>{formik?.errors?.LAST_NAME}</FormErrorMessage>}
                    </FormControl>
                  </Flex>


                  <Box>
                    <Button
                      isDisabled={formik.isSubmitting || !formik.dirty || (formik.dirty && !formik.isValid)}
                      onClick={() => handleFormSubmit(formik)}
                      isLoading={formik.isSubmitting}
                      spinner={<Spinner />}
                    >
                      Sign in
                    </Button>
                  </Box>

                </Stack>
              </Box>
            </Form>
          )
        }}

      </Formik>

    </Container>
  )
}