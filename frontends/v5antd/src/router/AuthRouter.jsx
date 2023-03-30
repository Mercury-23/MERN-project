import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PublicRoute from './PublicRoute';
import PageLoader from 'components/PageLoader';

const Login = lazy(() => import(/*webpackChunkName:'LoginPage'*/ 'pages/Login'));

const NotFound = lazy(() => import(/*webpackChunkName:'NotFoundPage'*/ 'pages/NotFound'));

export default function AuthRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
