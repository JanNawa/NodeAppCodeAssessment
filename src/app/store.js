import { configureStore } from '@reduxjs/toolkit'

import nodesReducer from '../components/Node/NodesSlice'

export default configureStore({
  reducer: {
    nodes: nodesReducer
  },
})