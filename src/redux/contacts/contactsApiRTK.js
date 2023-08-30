import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, signal }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        signal,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/contacts', method: 'GET' }),
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({ url: '/contacts', method: 'POST', data }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data.id}`,
        method: 'PATCH',
        data: { name: data.name, number: data.number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useRemoveContactMutation,
} = contactsApi;
