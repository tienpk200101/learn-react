import React, { useEffect, useRef } from "react";
import axios from "axios";

const inititalState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};

const hackerNewsReducer2 = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};

const HackerNewWithReducer2 = () => {
  const [state, dispatch] = React.useReducer(hackerNewsReducer2, inititalState);
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data.hits,
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      dispatch({
        type: "SET_ERROR",
        payload: error,
      });
    }
  };

  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  console.log(state.hits)
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          dispatch({
            type: "SET_QUERY",
            payload: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "SET_URL",
            payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
          });
        }}
      >
        Fetching
      </button>
    </div>
  );
};

export default HackerNewWithReducer2;
