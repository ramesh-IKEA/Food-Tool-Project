import * as yup from "yup";

export const CreateCasePQ = yup.object().shape({
  type: yup.string().required('Select case type'),
  name: yup.string().required('Please enter categoty'),
  safty_alaram_number: yup.string().required('Please enter safety alaram number'),
  invoice_number: yup.string().required('Please enter invoice number'),
  invoice_date: yup.string().required('Please enter invoice date'),
  sender_name: yup.string().required('Please select supplier'),
  receiving_unit_code: yup.string().required('Please select receiving unit'),
  // store_notes: yup.string().required('Please enter notes'),
});
export const CreateCaseSQ = yup.object().shape({
  type: yup.string().required('Select case type'),
  name: yup.string().required('Please enter desctiption'),
  invoice_number: yup.string().required('Please enter invoice number'),
  invoice_date: yup.string().required('Please enter invoice date'),
  unloading_data: yup.string().required('Please enter unloading date'),
  sender_name: yup.string().required('Please select sender'),
  unique_shipment_id: yup.string().required('Please enter shipment ID'),
  consingnment_id: yup.string().required('Please enter Consingnment ID'),
  transport_id: yup.string().required('Please enter transport ID'),
  dispatch_date: yup.string().required('Please enter dispatch date'),
  receiving_unit_code: yup.string().required('Please select receiving unit'),
  carrier_name: yup.string().required('Please enter carrier name'),
  invoice:yup.string().required('Please select the file'),
  temperature_log:yup.string().required('Please select the file'),
  shipment_checklist:yup.string().required('Please select the file'),
  lr_copy:yup.string().required('Please select the file')
  // shipment_type: yup.string().required('Please select shipment type'),
  // store_notes: yup.string().required('Please enter notes'),
});