import { SenderData ,storeLocation} from './varieraDataSource'
import {suggested_action} from './status'
export  const pq =[
  { value:'' , name: 'type',label: 'Type',type: 'select',id: 'type_id',placeholder: '',
    options: {
      'PQ': 'Product Quality',
      'SQ': 'Supply Quality'
    },
  },
  { value:'' , name: 'name',label: 'Category',type: 'text',id: 'name_id',placeholder: 'Write case name ...'},
  { value:'' , name: 'safty_alaram_number',label: 'Safety Alaram Number',type: 'text',id: 'safty_alaram_number_id',placeholder: ''},
  { value:'' , name: 'invoice_number',label: 'Invoice Number',type: 'text',id: 'invoive_number_id',placeholder: ''},
  { value:'' , name: 'invoice_date',label: 'Invoice Date',type: 'date',id: 'invoice_date_id',placeholder: '',maxDate:new Date()},
  { value:'' , name: 'sender_name',label: 'Supplier Name',type: 'select',id: 'sender_name_id',placeholder: '',options: SenderData},
  { value:'' , name: 'receiving_unit_code',label: 'Receiving unit',type: 'select',id: 'receiving_unit_code',placeholder: '',options: storeLocation},
  { value:'' , name: 'rca_capa',label: 'RCA/CAPA',type: 'file',id: 'rca_capa_id',placeholder: ''},
  { value:'' , name: 'invoice_copy',label: 'Invoice',type: 'file',id: 'invoice_id',placeholder: ''},
  { value:'' , name: 'temperature_log',label: 'Temperature Log',type: 'file',id: 'temperature_log_id',placeholder: ''},
  { value:'' , name: 'mandatory_checklist',label: 'Mandatory Checklist',type: 'file',id: 'mandatory_checklist_id',placeholder: ''},
  { value:'' , name: 'store_notes',label: 'Notes',type: 'text',id: 'store_notes_id',placeholder: ''},
];
export  const sq =[
  { value:'' , name: 'type',label: 'Type',type: 'select',id: 'type_id',placeholder: '',
    options: {
      'PQ': 'Product Quality',
      'SQ': 'Supply Quality'
    },
  },
  { value:'' , name: 'name',label: 'Desctiption',type: 'text',id: 'name_id',placeholder: 'Write case name ...'},
  { value:'' , name: 'invoice_number',label: 'Invoice Number',type: 'text',id: 'invoive_number_id',placeholder: ''},
  { value:'' , name: 'invoice_date',label: 'Invoice Date',type: 'date',id: 'invoice_date_id',placeholder: '',maxDate:new Date()},
  { value:'' , name: 'unloading_date',label: 'Unloading Date',type: 'date',id: 'unloading_date_id',placeholder: ''},
  { value:'' , name: 'sender_name',label: 'Sender Name',type: 'select',id: 'sender_name_id',placeholder: '',options: SenderData},
  { value:'' , name: 'unique_shipment_id',label: 'Shipment ID  ',type: 'text',id: 'unique_shipment_id',placeholder: ''},
  { value:'' , name: 'consingnment_id',label: 'Consingnment ID',type: 'text',id: 'consingnment_id',placeholder: ''},
  { value:'' , name: 'transport_id',label: 'Transport ID',type: 'text',id: 'transport_id',placeholder: ''},
  { value:'' , name: 'dispatch_date',label: 'Dispatch Date',type: 'date',id: 'dispatch_date_id',placeholder: ''},
  { value:'' , name: 'receiving_unit_code',label: 'Receiving unit',type: 'select',id: 'receiving_unit_code',placeholder: '',options: storeLocation},
  { value:'' , name: 'carrier_name',label: 'Carrier Name',type: 'text',id: 'carrier_name_id',placeholder: ''},
  { value:'' , name: 'shipment_type',label: 'Type of shipment',type: 'select',id: 'type_of_shipment_id',options: {'Ambient':'Ambient','Chilled':'Chilled', 'Frozen':'Frozen'}},
  { value:'' , name: 'seal_number',label: 'Seal Number',type: 'text',id: 'seal_number_id',placeholder: ''},
  { value:'' , name: 'truck_temprature',label: 'Truck Temperature',type: 'text',id: 'truck_temprature_id',placeholder: ''},
  { value:'' , name: 'lr_copy',label: 'LR Copy',type: 'file',id: 'lr_copy_id',placeholder: ''},
  { value:'' , name: 'invoice',label: 'Invoice',type: 'file',id: 'invoice_id',placeholder: ''},
  { value:'' , name: 'temperature_log',label: 'Temperature Log',type: 'file',id: 'temperature_log_id',placeholder: ''},
  { value:'' , name: 'shipment_checklist',label: 'Shipment Checklist',type: 'file',id: 'shipment_checklist_id',placeholder: ''},
  { value:'' , name: 'store_notes',label: 'Notes',type: 'text',id: 'store_notes_id',placeholder: ''},
];
const causing_party ={...SenderData, ...storeLocation};
export const pqQSCfields =[
  { value:'' , name: 'causing_party_code',label: 'Causing Party Code',type: 'select',id: 'causing_party_code',options:causing_party ,readOnly:false},
  { value:'' , name: 'action_confirmation',label: 'Action Confirmation',type: 'select',id: 'action_confirmation',placeholder: '',readOnly:false,options:suggested_action},
]