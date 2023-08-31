import { Routes } from 'react-router-dom';

// const HomePage = React.lazy(() => import('./pages/Homepage'));

// const ProtectedRoute = () => {
//   const isLoggedIn = localStorage.getItem('access-token');
//   if (!isLoggedIn) {
//     return <Navigate to={ROUTES.HOME} />;
//   }

//   return <Outlet />;
// };

const Router = () => {
  return (
    <Routes>
      {/* <Route index element={<HomePage />} /> */}

      {/* Authentication Required in all of these below Routes */}
      {/* <Route element={<ProtectedRoute />}>
        <Route
          path={ROUTES.PROFILE}
          element={
            <Suspense fallback={<LoadingPage />}>
              <ProfilePage />
            </Suspense>
          }
        />
      </Route> */}
    </Routes>
  );
};

export default Router;

export const ROUTES = {
  HOME: '/',
};
