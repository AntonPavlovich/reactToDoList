import * as yup from 'yup'

export const TASK_BODY_SCHEMA = yup.object({
  task : yup.string(/^[A-Za-z0-9]{1,}$/).required('sorry but you cant create todo without text'),
})