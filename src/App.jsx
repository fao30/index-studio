import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

const Detail = lazy(() => import("./pages/Homepage/Detail"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
