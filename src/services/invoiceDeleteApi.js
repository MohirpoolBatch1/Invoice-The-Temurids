import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../constant'

export const invoiceDeleteApi = createApi({
  reducerPath: 'invoiceDeleteApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    deleteInvoice: builder.mutation({
      query: invoiceId => ({
        url: `/invoice/${invoiceId}`,
        method: 'DELETE',
      }),
    }),
  }),
})
export const {useDeleteInvoiceMutation} = invoiceDeleteApi
