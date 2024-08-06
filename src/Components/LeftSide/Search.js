import React, { useContext, useState } from "react";

import { IoMdCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DataContext from "../../Context/DataContext";

import "./leftmain.css";

const Search = () => {
  const { setInputValue, errorMessage, setErrorMessage } =
    useContext(DataContext);

  const [inputData, setInputData] = useState("");

  // handle the input from the search bar and if the value not in then store else just empty
  function handleInput(e) {
    if (e.target.value !== "") {
      setInputData(e.target.value);
    } else {
      setInputData("");
    }
  }

  function clearInput() {
    setInputData("");
    setErrorMessage("");
  }

  function submitContext() {
    if (inputData !== "") {
      setInputValue(inputData);
    } else {
      toast.error("Please fill the Search Bar...");
    }
  }
  function submitContext2(e) {
    e.preventDefault();
    if (inputData !== "") {
      setInputValue(inputData);
    } else {
      toast.error("Please fill the Search Bar...");
    }
  }

    errorMessage !== "" &&
      toast.error(`${errorMessage} \n please enter correct one`);

  return (
    <div className="search">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form>
        <div className="input-group flex-nowrap">
          <span
            className="bg-white input-group-text rounded-start-pill"
            id="addon-wrapping"
            onClick={submitContext}
            style={{ cursor: "pointer" }}
          >
            <FaSearch style={{ fontSize: "1.3em", textAlign: "center" }} />
          </span>
          <input
            type="text"
            className=" bg-white form-control"
            placeholder="cityname"
            aria-label="cityname"
            aria-describedby="addon-wrapping"
            value={inputData}
            onChange={handleInput}
          ></input>
          <span
            className="bg-white input-group-text rounded-start-pill"
            id="addon-wrapping"
            onClick={clearInput}
            style={{ cursor: "pointer" }}
          >
            <IoMdCloseCircle
              style={{ fontSize: "1.5em", textAlign: "center" }}
            />
          </span>
        </div>
        <button
          onClick={submitContext2}
          style={{ display: "none" }}
          type="submit"
        ></button>
      </form>
    </div>
  );
};

export default Search;
