import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from '../constant'

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
  }),
  tagTypes: ['Invoice'],
  endpoints: builder => ({
    invoices: builder.query({
      query: () => '/invoice',
      providesTags: ['Invoice'],
    }),
    addInvoice: builder.mutation({
      query: invoice => ({
        url: '/invoice',
        method: 'POST',
        body: invoice,
      }),

      invalidatesTags: ['Invoice'],
    }),
    updateInvoice: builder.mutation({
      query: ({id, ...rest}) => ({
        url: `/invoice/${id}`,
        method: 'PUT',
        body: rest,
      }),

      invalidatesTags: ['Invoice'],
    }),
    invoiceItemDetails: builder.query({
      query: invoiceId => `/invoice/${invoiceId}`,
      providesTags: ['Invoice'],
    }),
    deleteInvoice: builder.mutation({
      query: invoiceId => ({
        url: `/invoice/${invoiceId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoice'],
    }),
  }),
})
export const {
  useInvoicesQuery,
  useInvoiceItemDetailsQuery,
  useAddInvoiceMutation,
  useUpdateInvoiceMutation,
  useDeleteInvoiceMutation,
} = invoiceApi
