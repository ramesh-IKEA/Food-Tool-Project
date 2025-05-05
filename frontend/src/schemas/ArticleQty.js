import * as yup from "yup";

export const UpdateArticleQty = yup.object().shape({
    damaged_quantity: yup.string().required('Select enter quantity'),
    batch_number: yup.string().required('Enter batch number'),
    manufacturing_date: yup.date().required('Select manufacturing date'),
    dispatch_date: yup.date().required('Select Dispatch date'),
    best_before_date: yup.date().required('Select best before date'),
    expiry_date: yup.date().required('Select expiry date'),
});