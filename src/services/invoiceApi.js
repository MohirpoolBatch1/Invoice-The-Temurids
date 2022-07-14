import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../constant'

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ['Invoice'],
  endpoints: builder => ({
    deleteInvoice: builder.mutation({
      query: invoiceId => ({
        url: `/invoice/${invoiceId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoice'],
    }),
  }),
})
export const {useDeleteInvoiceMutation} = invoiceApi
