import { storeLocation } from './varieraDataSource'
export  const LoginFileds =[
    { name: 'username',label: 'User Name',type: 'text',id: 'user_name_id',placeholder: ''},
    { name: 'password',label: 'Password',type: 'password',id: 'password_id',placeholder: ''}
  ];
  export  const UpdatepasswordFileds =[
    { name: 'password',label: 'Password',type: 'password',id: 'password_id',placeholder: ''},
    { name: 'confirmPassword',label: 'Confirm Password',type: 'password',id: 'confirmPassword_id',placeholder: ''}
  ];
  export const CreateUsersFileds =[
    { name: 'name',label: 'Name',type: 'text',id: 'name_id',placeholder: ''},
    { name: 'email',label: 'Email ID',type: 'text',id: 'email_id',placeholder: ''},
    { name: 'short_id',label: 'Short ID',type: 'text',id: 'short_id',placeholder: ''},
    { name: 'unit_id',label: 'Unit',type: 'select',id: 'unit_id',placeholder: '','options':{"store":"store",'SO':'SO'},value:''},
    { name: 'user_function',label: 'User function',type: 'select',id: 'user_function_id',placeholder: '','options':{...storeLocation,...{'PQ':'SO','SQ':'SO'}},value:''}
  ]