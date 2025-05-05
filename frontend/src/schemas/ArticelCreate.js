import * as yup from "yup";
// const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

// function isValidFileType(fileName, fileType) {
//   return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
// }
// const MAX_FILE_SIZE = 102400;
export const ArticelCreatePQ = yup.object().shape({
  articel_number: yup.string().required('Select article'),
  supplier_number: yup.string().required('Select supplier'),
  batch_number: yup.string().required('Enter batch number'),
  damaged_quantity: yup.string().required('Enter damaged quantity'),
  over_delivery: yup.string().required('Over delivery'),
  causing_party_code: yup.string().required('Select causing party'),
  suggested_action: yup.string().required('Enter suggested action'),
  action_confirmation: yup.string().required('Enter action confirmation'),
  labor_hours: yup.number('Enter only in hours').required('Enter labor hours'),
  other_cost: yup.string().required('Enter other costs'),
  manufacturing_date: yup.date().required('Select manufacturing date'),
  dispatch_date: yup.date().required('Select Dispatch date'),
  best_before_date: yup.date().required('Select best before date'),
  expiry_date: yup.date().required('Select expiry date'),
});
export const ArticelCreateSQ = yup.object().shape({
  articel_number: yup.string().required('Select article'),
  supplier_number: yup.string().required('Select supplier'),
  consingnment_id: yup.string().required('Enter consingnment id'),
  invoice_quantity: yup.string().required('Enter invoice quantity'),
  received_quantity: yup.string().required('Enter received quantity'),
  damaged_quantity: yup.string().required('Enter damaged quantity'),
  article_value: yup.string().required('Enter article value'),
  over_delivery: yup.string().required('Over delivery'),
  damage_type: yup.string().required('Select damage type'),
  causing_party_code: yup.string().required('Select causing party'),
  nc_codes: yup.string().required('Enter nc codes action'),
  suggested_action: yup.string().required('Enter suggested action'),
  action_confirmation: yup.string().required('Enter action confirmation'),
  labor_hours: yup.number('Enter only in hours').required('Enter labor hours'),
  other_cost: yup.string().required('Enter other costs'),
  manufacturing_date: yup.date().required('Select manufacturing date'),
  dispatch_date: yup.date().required('Select Dispatch date'),
  best_before_date: yup.date().required('Select best before date'),
  expiry_date: yup.date().required('Select expiry date'),
});
