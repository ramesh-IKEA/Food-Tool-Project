import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CaseCreate from './views/case/create'
import AssociatedCases from './views/case/associated_case_list'
import AddArticles from './views/case/articles'
import Editcase from './views/case/edit';
import AddArticlesQuantity from './views/case/articlesQuantity'
import CaseList from './views/case/list'
import Login from './views/auth/login'
import UpdatePassword from './views/auth/updatePassword'
import CreateUser from './views/users/index'
import ProtectedRoute from './utils/protectedRoute'
import UnProtectedRoute from './utils/unprotectedRouts'
import Dashboard from './views/dashboard/index'
import InternalError from './views/errors/internal_error'

const MyRoutes = () => {
  let reqestedPath =window.location.pathname
  return (
    <Routes>
       <Route path='/' element={<UnProtectedRoute path={reqestedPath}><Login/></UnProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/internal_error' element={<InternalError/>}/>
        <Route path='/create_case' element={<ProtectedRoute path={reqestedPath}><CaseCreate/> </ProtectedRoute>}/>
        <Route path='/case_associated' element={<ProtectedRoute path={reqestedPath}><AssociatedCases/> </ProtectedRoute>}/>
        <Route path='/case/edit/:caseID/:type' element={<ProtectedRoute path={reqestedPath}><Editcase/> </ProtectedRoute>}/>
        <Route path='/add_articles' element={<ProtectedRoute path={reqestedPath}><AddArticles/></ProtectedRoute>}/>
        <Route path='/case/add_qty/:id/' element={<ProtectedRoute path={reqestedPath}><AddArticlesQuantity/></ProtectedRoute>}/>
        <Route path='/case_list' element={<ProtectedRoute path={reqestedPath}><CaseList/></ProtectedRoute>}/>
        <Route path='/update_password' element={<ProtectedRoute path={reqestedPath}><UpdatePassword/></ProtectedRoute>}/>
        <Route path='/users' element={<ProtectedRoute path={reqestedPath}><CreateUser/></ProtectedRoute>}/>
        <Route path='/dashboard/:type?' element={<ProtectedRoute path={reqestedPath}><Dashboard/></ProtectedRoute>}/>
     
    </Routes>
  );
}

export default MyRoutes;