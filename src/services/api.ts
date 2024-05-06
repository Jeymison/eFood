import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getCardapioRestaurants: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeatureRestaurantsQuery, useGetCardapioRestaurantsQuery } =
  api

export default api
