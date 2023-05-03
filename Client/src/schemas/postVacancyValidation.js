import * as Yup from 'yup';

export const postVacancyValidation = Yup.object({
  title: Yup.string()
    .label('Title')
    .required(),
  position: Yup.string()
    .required(),
  description: Yup.string()
    .label('Description')
    .required(),
});
