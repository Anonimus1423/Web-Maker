import { createStore } from 'redux'
import { contentReducer } from './contentReducer/index'

export const store = createStore(contentReducer)
