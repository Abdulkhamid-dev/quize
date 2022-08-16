import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/container";
import Header from "./components/header/header";
import Start from "./pages/Start";
import { PublicRoutes } from "./routes";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={"Loading..."}>
          <Routes>
            {PublicRoutes.map((item) => {
              return (
                <Route
                  key={item.key}
                  path={item.path}
                  element={item.component}
                />
              );
            })}
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
