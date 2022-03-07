import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API = process.env.REACT_APP_GITHUB_URL;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const initialState = {
  users: [],
  user: {},
  text: "",
  repos: [],
  loading: false,
};

const github = axios.create({
  baseURL: API,
  headers: {
    Authorization: `token ${TOKEN}`,
  },
});

export const searchUser = createAsyncThunk(
  "github/searchUser",
  async (text) => {
    const res = await github.get(`/search/users?q=${text}`);
    return res.data.items;
  }
);

export const getUserAndRepos = createAsyncThunk(
  "github/getUSer",
  async (login) => {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ]);

    return {
      user: user.data,
      repos: repos.data,
    };
  }
);

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    searchText: (state, action) => {
      state.text = action.payload;
    },
    clearSearch: (state) => {
      state.users = [];
      state.text = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUserAndRepos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAndRepos.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.repos = action.payload.repos;
        state.loading = false;
      });
  },
});

export const { searchText, clearSearch } = githubSlice.actions;
export default githubSlice.reducer;
