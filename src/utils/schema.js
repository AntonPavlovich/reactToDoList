import * as yup from 'yup'

export const TASK_BODY_SCHEMA = yup.object({
  task : yup.string().required(),
})