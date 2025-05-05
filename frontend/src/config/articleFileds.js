import { SenderData,articlesList } from './varieraDataSource'
import {suggested_action} from './status'
import moment from 'moment'
export  const pqArticle = [
  { value:'' , name: 'supplier_number',label: 'Supplier Number',type: 'select',id: 'supplier_number',placeholder: '',options:SenderData ,readOnly:false},
    { value:'' , name: 'articel_number',label: 'Article',type: 'select',id: 'articel_number',placeholder: '' ,readOnly:false,options:articlesList},
    { value:'' , name: 'batch_number',label: 'Batch Number',type: 'text',id: 'batch_number',placeholder: '',readOnly:false},
    { value:'' , name: 'damaged_quantity',label: 'Damaged Quantity',type: 'text',id: 'damaged_quantity',placeholder: '',readOnly:false},
    { value:'' , name: 'available_stock',label: 'Available Quantity',type: 'text',id: 'available_stock',placeholder: '',readOnly:false},
    { value:'' , name: 'suggested_action',label: 'Suggested Action by units',type: 'select',id: 'suggested_action',placeholder: '',readOnly:false,options:suggested_action},
    { value:'' , name: 'labor_hours',label: 'Total labor hours (In Minutes)',type: 'text',id: 'labor_hours',placeholder: '',readOnly:false},
    { value:'' , name: 'other_cost',label: 'Other cost',type: 'text',id: 'other_cost',placeholder: '',readOnly:false},
    { value:'' , name: 'manufacturing_date',label: 'Manufacturing Date',type: 'date',id:'manufacturing_date',placeholder: '',readOnly:false,maxDate:new Date()},
    { value:'' , name: 'dispatch_date',label: 'Receiving Date',type: 'date',id: 'dispatch_date',placeholder: '',readOnly:false,maxDate:new Date()},
    { value:'' , name: 'best_before_date',label: 'Best Before Date',type: 'date',id: 'best_before_date',placeholder: '',readOnly:false},
    { value:'' , name: 'expiry_date',label: 'Expiry Date',type: 'date',id: 'expiry_date',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_1',label: 'Defected Picture 1',type: 'file',id: 'damage_picture_1',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_2',label: 'Defected Picture 2',type: 'file',id: 'damage_picture_2',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_3',label: 'Defected Picture 3',type: 'file',id: 'damage_picture_3',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_4',label: 'Defected Picture 4',type: 'file',id: 'damage_picture_4',placeholder: '',readOnly:false},
  ];
  export  const sqArticle = [
    { value:'' , name: 'articel_number',label: 'Articel name',type: 'select',id: 'articel_number',placeholder: '' ,readOnly:false,options:articlesList},
    { value:'' , name: 'article_value',label: 'Article Value',type: 'text',id: 'article_value_id',placeholder: '',readOnly:false},
    { value:'' , name: 'hsn_code',label: 'HSN code',type: 'text',id: 'hsn_code_id',placeholder: '',readOnly:false},
    { value:'' , name: 'manufacturing_date',label: 'Manufacturing Date',type: 'date',id:'manufacturing_date',placeholder: '',readOnly:false,maxDate:new Date()},
    { value:'' , name: 'dispatch_date',label: 'Dispatch Date',type: 'date',id: 'dispatch_date',placeholder: '',readOnly:false,maxDate:new Date()},
    { value:'' , name: 'best_before_date',label: 'Best Before Date',type: 'date',id: 'best_before_date',placeholder: '',readOnly:false},
    { value:'' , name: 'expiry_date',label: 'Expiry Date',type: 'date',id: 'expiry_date',placeholder: '',readOnly:false},
    { value:'' , name: 'supplier_number',label: 'Supplier Number',type: 'select',id: 'supplier_number',placeholder: '',options:SenderData ,readOnly:false},
    { value:'' , name: 'consingnment_id',label: 'Consingnment ID',type: 'text',id: 'consingnment_id',placeholder: '',readOnly:false},
    { value:'' , name: 'invoice_quantity',label: 'Invoiced Quantity',type: 'text',id: 'invoice_quantity',placeholder: '',readOnly:false},
    { value:'' , name: 'received_quantity',label: 'Received Quantity',type: 'text',id: 'received_quantity',placeholder: '',readOnly:false},
    { value:'' , name: 'damaged_quantity',label: 'Damaged Quantity',type: 'text',id: 'damaged_quantity',placeholder: '',readOnly:false},
    { value:'' , name: 'over_delivery',label: 'Over/ Under Delivery ',type: 'text',id: 'over_delivery',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_type',label: 'Damage Type',type: 'select',id: 'damage_type_id',placeholder: '',readOnly:false,options:{'package':'package','expired':'expired'}},
    // { value:'' , name: 'causing_party_code',label: 'Causing Party Code',type: 'select',id: 'causing_party_code',options:SenderData ,readOnly:false},
    { value:'' , name: 'suggested_action',label: 'Suggested Action by units',type: 'select',id: 'suggested_action',placeholder: '',readOnly:false,options:suggested_action},
    // { value:'' , name: 'action_confirmation',label: 'Action Confirmation',type: 'text',id: 'action_confirmation',placeholder: '',readOnly:false},
    { value:'' , name: 'nc_codes',label: 'NC codes',type: 'text',id: 'nc_codes',placeholder: '',readOnly:false},
    { value:'' , name: 'labor_hours',label: 'Labor hours (In Minutes)',type: 'text',id: 'labor_hours',placeholder: '',readOnly:false},
    { value:'' , name: 'other_cost',label: 'Other cost',type: 'text',id: 'other_cost',placeholder: '',readOnly:false},

    { value:'' , name: 'damage_picture_1',label: 'Defected Picture 1',type: 'file',id: 'damage_picture_1',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_2',label: 'Defected Picture 2',type: 'file',id: 'damage_picture_2',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_3',label: 'Defected Picture 3',type: 'file',id: 'damage_picture_3',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_4',label: 'Defected Picture 4',type: 'file',id: 'damage_picture_4',placeholder: '',readOnly:false},
  ];
  export const sqQSCfields =[
    { value:'' , name: 'causing_party_code',label: 'Causing Party Code',type: 'select',id: 'causing_party_code',options:SenderData ,readOnly:false},
    { value:'' , name: 'action_confirmation',label: 'Action Confirmation',type: 'select',id: 'action_confirmation',placeholder: '',readOnly:false,options:suggested_action},
  ]
  export const pqStoreQuantity =[
    { value:'' , name: 'damaged_quantity',label: 'Damaged Quantity',type: 'text',id: 'damaged_quantity',placeholder: '',readOnly:false},
    { value:'' , name: 'available_stock',label: 'Available Quantity',type: 'text',id: 'available_stock',placeholder: '',readOnly:false},
    { value:'' , name: 'batch_number',label: 'Batch Number',type: 'text',id: 'batch_number',placeholder: '',readOnly:false},
    { value:'' , name: 'manufacturing_date',label: 'Manufacturing Date',type: 'date',id:'manufacturing_date',placeholder: '',readOnly:false,maxDate:new Date()},
    { value:'' , name: 'dispatch_date',label: 'Dispatch Date',type: 'date',id: 'dispatch_date',placeholder: '',readOnly:false,maxDate:new Date()},
    { value:'' , name: 'best_before_date',label: 'Best Before Date',type: 'date',id: 'best_before_date',placeholder: '',readOnly:false},
    { value:'' , name: 'expiry_date',label: 'Expiry Date',type: 'date',id: 'expiry_date',placeholder: '',readOnly:false},
    { value:'' , name: 'labor_hours',label: 'Estimated labor hours (In Minutes)',type: 'text',id: 'labor_hours',placeholder: '',readOnly:false},
    { value:'' , name: 'other_cost',label: 'Other cost',type: 'text',id: 'other_cost',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_1',label: 'Defected Picture 1',type: 'file',id: 'damage_picture_1',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_2',label: 'Defected Picture 2',type: 'file',id: 'damage_picture_2',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_3',label: 'Defected Picture 3',type: 'file',id: 'damage_picture_3',placeholder: '',readOnly:false},
    { value:'' , name: 'damage_picture_4',label: 'Defected Picture 4',type: 'file',id: 'damage_picture_4',placeholder: '',readOnly:false},
  ]
  