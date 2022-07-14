import {configureStore} from '@reduxjs/toolkit'
import {invoiceDeleteApi} from '../services/invoiceDeleteApi'

export const store = configureStore({
  reducer: {
    [invoiceDeleteApi.reducerPath]: invoiceDeleteApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(invoiceDeleteApi.middleware),
})
