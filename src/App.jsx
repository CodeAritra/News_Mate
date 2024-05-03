import "./App.css";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<NewsComponent country="in" pagesize="6" category="" />}
          />
          <Route
            path="/Technology"
            element={
              <NewsComponent country="in" pagesize="6" category="Technology" />
            }
          />
          <Route
            path="/Sports"
            element={
              <NewsComponent country="in" pagesize="6" category="Sports" />
            }
          />
          <Route
            path="/Health"
            element={
              <NewsComponent country="in" pagesize="6" category="Health" />
            }
          />
          <Route
            path="/Business"
            element={
              <NewsComponent country="in" pagesize="6" category="Business" />
            }
          />
          <Route
            path="/Science"
            element={
              <NewsComponent country="in" pagesize="6" category="Science" />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <NewsComponent
                country="in"
                pagesize="6"
                category="Entertainment"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
