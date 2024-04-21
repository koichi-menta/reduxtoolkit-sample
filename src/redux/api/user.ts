import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MicroCmsType } from "../../types/utils";

// ユーザーデータの型定義
export type User = {
  id: string;
  name: string;
  age: number;
  hoby: string;
};

export const userApi = createApi({
  // APIの名前
  reducerPath: "userApi",
  // APIの基準となるURL
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "X-MICROCMS-API-KEY": import.meta.env.VITE_API_KEY || "",
    },
  }),
  tagTypes: ["User"],
  // 基準となるURLに対してのエンドポイントを定義
  endpoints: (builder) => ({
    getUserList: builder.query<MicroCmsType<User>, void>({
      query: () => "user",
      providesTags: (result) =>
        result
          ? result.contents.map(({ id }) => ({ type: "User", id }))
          : ["User"],
    }),
    getUserDetail: builder.query<User, string>({
      query: (id) => `user/${id}`,
      providesTags: (_result, _error, id) => [{ type: "User", id }],
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (user) => {
        const { id, ...patchData } = user;
        return {
          url: `user/${id}`,
          method: "PATCH",
          body: patchData,
        };
      },
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserListQuery,
  useGetUserDetailQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
