import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/container";
import Header from "./components/header/header";
import Start from "./pages/Start";
import { useAppSelector } from "./redux/hooks";
import { PublicRoutes } from "./routes";

function App() {
  const questions = useAppSelector((state) => state.question.all_questions);
  console.log(questions);

  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={"Loading..."}>
          <Routes>
            {questions.length > 0
              ? PublicRoutes.map((item) => {
                  return (
                    <Route
                      key={item.key}
                      path={item.path}
                      element={item.component}
                    />
                  );
                })
              : PublicRoutes.filter((item) => item.isProtected === false).map(
                  (item) => {
                    return (
                      <Route
                        key={item.key}
                        path={item.path}
                        element={item.component}
                      />
                    );
                  }
                )}
                  <Route path="*" element={<Start />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
