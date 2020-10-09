// adapted from https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-3-postRequests/?from-embed=&file=/src/api/client.js:0-987

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
  nodes: [],
  status: 'idle',
  error: null,
}

export const fetchNodes = createAsyncThunk('nodes/fetchNodes', async (businessId) => {
  const response = await client.get(`https://1pzb5pyogj.execute-api.us-east-1.amazonaws.com/prod?businessId=${businessId}`)
  return response
})

const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchNodes.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchNodes.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.nodes = state.nodes.concat(action.payload)
    },
    [fetchNodes.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export default nodesSlice.reducer

export const selectAllNodes = (state) => state.nodes.nodes
