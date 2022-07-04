import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://serene-plains-38345.herokuapp.com/'
export const invoiceDeleteApi = createApi({
  reducerPath: 'invoiceDeleteApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    InvoiceDelete: builder.mutation({
      query: ({id}) => `/invoice${id}`,
    }),
  }),
})

export const {useInvoiceDeleteMutation} = invoiceDeleteApi
