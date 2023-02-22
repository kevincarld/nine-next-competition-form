import * as Yup from 'yup'

export const initialFormValues= {
  FIRST_NAME: '',
  LAST_NAME: '',
  SAMPLE_SELECT: '',
  ACCEPTANCE: false,

  //default
  meta: {
    createdOn: new Date(),
  }
}

export const validationSchema = Yup.object({
  FIRST_NAME: Yup.string().required('Please enter your first name.'),
  LAST_NAME: Yup.string().required('Please enter your last name.'),
  SAMPLE_SELECT: Yup.string().required('Please select an answer.'),

})