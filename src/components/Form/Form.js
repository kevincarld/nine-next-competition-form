import React from 'react'
// chakra
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
// formik
import { Formik, Form, Field } from 'formik';
//
import { Select } from 'chakra-react-select';
import Container from '../util/Container';
import { isFieldError, isFieldTouched, validateCheckboxTrue } from 'utils/common';
import { initialFormValues, validationSchema } from './util/schema';
import Thankyou from './Thankyou';

export default function FormComponent() {
  const [formSubmitted, setFormSubmitted] = React.useState(false)

  const handleFormSubmit = async (formik) => {
    formik.setSubmitting(true)

    const isAccepted = validateCheckboxTrue(formik, 'ACCEPTANCE', 'Please click this checkbox to accept.')
    if(isAccepted && formik.isValid && formik.dirty) {

      const { values } = formik
      const firstname = values['FIRST_NAME']
      const lastname = values['LAST_NAME']

      // debug
      window.alert(JSON.stringify(values, null, 2))


      // submit to formstack
      // axios.post('https://submit.formstack.com/forms/YOUR_FORM_ID', values)
      // .then(response => {
      //   console.log(response);
      //     formik.setSubmitting(false);
      //      setFormSubmitted(true)
      // })
      // .catch(error => {
      //  console.log(error);
      //  formik.setSubmitting(false)
      //  setFormSubmitted(true)
      // });

      formik.setSubmitting(false)
      setFormSubmitted(true)
    }

    formik.setSubmitting(false)
  }

  return (
    <Container>
      {formSubmitted ? <Thankyou />
      :
        <Formik
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            return true // give responsibility to handleFormSubmit()
          }}
          >

          {(formik) => {
            const invalidFname = isFieldTouched(formik, 'FIRST_NAME') && isFieldError(formik, 'FIRST_NAME')
            const invalidLname = isFieldTouched(formik, 'LAST_NAME') && isFieldError(formik, 'LAST_NAME')

            const selectOptions = [
              {label: 'Select A', value: 'select a'},
              {label: 'Select B', value: 'select b'},
            ]

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

                    <Field name="SAMPLE_SELECT">
                      {({ field, form, meta }) => {
                        return (
                          <FormControl id={field.name} isRequired isInvalid={meta?.error !== '' || meta?.error !== undefined}>
                            <FormLabel htmlFor={`SAMPLE_SELECT`}>Sample dropdown select</FormLabel>
                            <Select
                              instanceId={field.name}
                              id={field.name}
                              name={field.name}
                              placeholder="Select your answer"
                              options={selectOptions}
                              value={
                                selectOptions
                                  ? selectOptions.find((option) => option.value === field.value)
                                  : null
                              }
                              onChange={ (option) => form.setFieldValue(field.name, option.value) }
                              onBlur={ () => {
                                form.validateField(field.name)
                                form.setFieldTouched(field.name, true)
                              }}
                              />

                              {meta?.error && meta?.touched && <FormErrorMessage>{meta?.error}</FormErrorMessage> }
                          </FormControl>
                        )}
                      }
                    </Field>

                    <Field as={Checkbox} type='checkbox' name='ACCEPTANCE' borderColor={'black'} isInvalid={formik?.values?.ACCEPTANCE === false && formik?.errors?.ACCEPTANCE}>
                      Acceptance sample.
                    </Field>
                    {formik?.values?.ACCEPTANCE === false && formik?.errors?.ACCEPTANCE && <Text mt='2!important' fontSize='small' color='red'>{formik?.errors?.ACCEPTANCE}</Text>}


                    <Box>
                      <Button
                        isDisabled={formik.isSubmitting || !formik.dirty || (formik.dirty && !formik.isValid)}
                        onClick={() => handleFormSubmit(formik)}
                        isLoading={formik.isSubmitting}
                        spinner={<Spinner />}
                      >
                        Submit
                      </Button>
                    </Box>

                  </Stack>
                </Box>
              </Form>
            )
          }}

        </Formik>
      }
    </Container>
  )
}
