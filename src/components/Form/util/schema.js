import * as Yup from 'yup'

export const initialFormValues= {
  FIRST_NAME: '',
  LAST_NAME: '',

  //default
  meta: {
    createdOn: new Date(),
  }
}

export const validationSchema = Yup.object({
  FIRST_NAME: Yup.string().required('Please enter your first name.'),
  LAST_NAME: Yup.string().required('Please enter your last name.'),
})