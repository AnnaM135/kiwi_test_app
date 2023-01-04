import React, {lazy, Suspense } from 'react'
const Header = lazy(() => import('../components/Header/Header'));
const MainView = lazy(() => import('../components/MainView/MainView'));


export function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MainView />
    </Suspense>
  );
}
