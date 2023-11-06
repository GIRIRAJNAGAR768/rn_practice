import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const TodoReducer = createSlice({
  name: 'todoSlice',
  initialState: {
    loading: true,
    todoList: [],
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchTodosAction.pending, state => {
      return {...state, loading: true, isError: false};
    });

    builder.addCase(fetchTodosAction.fulfilled, (state, action) => {
      return {...state, loading: false, todoList: action.payload};
    });

    builder.addCase(fetchTodosAction.rejected, state => {
      return {...state, loading: false, isError: true};
    });
  },
  reducers: {},
});

export const fetchTodosAction: any = createAsyncThunk(
  'fetchTodosAction',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res?.json();
  },
);

export default TodoReducer.reducer;
