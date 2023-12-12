import "./App.css";
import React, { useState } from "react";
import Form from "./components/form/Form";
import MovieSearchApp from "./components/movie/MovieSearchApp";
import SignupForm from "./components/form/SignupForm";
import SignupFormV2 from "./components/form/SignupFormV2";

function App() {
  return (
    <div>
      <SignupFormV2 />
    </div>
  );
}

export default App;
