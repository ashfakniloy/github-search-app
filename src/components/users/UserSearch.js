import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchText, searchUser } from "../../fetaures/github/githubSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserSearch() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const toastAlert = () => {
    toast.error("Please enter something", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const txt = text.trim();
    if (txt === "") {
      toastAlert();
    } else {
      dispatch(searchUser(txt));
      dispatch(searchText(txt));
    }

    setText("");
  };

  return (
    <div className="flex justify-center">
      <ToastContainer className="mt-16" />
      <form className="flex items-center mx-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter github username"
          onChange={(e) => setText(e.target.value)}
          className="w-full outline-none p-2 border bg-gray-800 focus:bg-gray-900 text-slate-100 border-gray-900 text-lg focus:border-r-gray-500 rounded-lg rounded-r-none"
        />
        <button
          type="submit"
          className="text-slate-100 text-xl font-semibold bg-gray-900 active:bg-gray-700 px-4 py-[9px] rounded-lg rounded-l-none"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default UserSearch;
