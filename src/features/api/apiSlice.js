import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    // refetchOnMountOrChange: true,
    // refetchOnFocus: true,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Songs', 'Playlists', 'Genres'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: ['User'],
    }),
    getSingleUser: builder.query({
      query: (uid) => `users/${uid}`,
      method: 'GET',
    }),
    signUpUser: builder.mutation({
      // TODO: can this be merged with addUser in front and back?
      query: (user) => ({
        url: '/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    logInAndUpdateToken: builder.mutation({
      query: ({ uid, token }) => ({
        url: '/login',
        method: 'PATCH',
        body: {
          uid: uid,
          token: token,
        },
      }),
    }),
    getSongs: builder.query({
      query: () => '/songs',
      transformResponse: (res) => res.songs,
      providesTags: ['Songs'],
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Songs', id })), 'Songs']
          : ['Songs'],
    }),
    addSong: builder.mutation({
      query: (song) => ({
        url: '/addsong',
        method: 'POST',
        body: song,
      }),
      invalidatesTags: ['Songs'],
      transformResponse: (res) => console.log(res),
    }),
    deleteSong: builder.mutation({
      query: ({ songId }) => ({
        url: `/songs/${songId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Songs'],
    }),
    updateSong: builder.mutation({
      query: ({ songId, title, album, artist }) => ({
        url: `/songs/${songId}`,
        method: 'PUT',
        body: {
          title,
          album,
          artist,
        },
      }),
      invalidatesTags: ['Songs'],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: (userObj) => ({
        url: `/users/${userObj.uid}`,
        method: 'PATCH',
        body: {
          firstName: userObj.firstName,
          lastName: userObj.lastName,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    likeASong: builder.mutation({
      query: ({ songId, userId }) => ({
        url: `/songs/${songId}/like`,
        method: 'POST',
        body: {
          userId: userId,
        },
      }),
      // invalidatesTags: ['Songs']
      invalidatesTags: (result, error, arg) => [{ type: 'Songs', id: arg.id }],
    }),
    deleteLikeASong: builder.mutation({
      query: ({ songId, userId }) => ({
        url: `/songs/${songId}/like`,
        method: 'DELETE',
        body: {
          userId: userId,
        },
      }),
      invalidatesTags: ['Songs'],
    }),
    getPlaylists: builder.query({
      query: () => '/playlists',
      providesTags: ['Playlists'],
    }),
    getPlaylistsByUser: builder.query({
      query: (userId) => `/playlists/user/${userId}`,
      providesTags: ['Playlists'],
    }),
    addSongToPlaylist: builder.mutation({
      query: ({ playlistId, songId }) => ({
        url: `/playlists/${playlistId}/addsong`,
        method: 'PATCH',
        body: {
          songId: songId,
        },
      }),
      invalidatesTags: ['Playlists'],
    }),
    getSinglePlaylist: builder.query({
      query: (playlistId) => `/playlists/${playlistId}`,
      method: 'GET',
      providesTags: ['Playlists'],
    }),
    getGenres: builder.query({
      query: () => '/genres',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Genres', id })), 'Genres']
          : ['Genres'],
    }),
    getGenreById: builder.query({
      query: (genreId) => `/genres/${genreId}`
    }),
    addPlaylist: builder.mutation({
      query: ({ title, description, isPrivate, userId, songs }) => ({
        url: '/playlists',
        method: 'POST',
        body: {
          title,
          description,
          isPrivate,
          userId,
          songs,
        },
      }),
      invalidatesTags: ['Playlists'],
    }),
    deletePlaylist: builder.mutation({
      query: ({ playlistId }) => ({
        url: `/playlists/${playlistId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Playlists'],
    }),
    renamePlaylist: builder.mutation({
      query: ({ playlistId, playlistTitle })=> ({
        url: `/playlists/${playlistId}`,
        method: 'PATCH',
        body: {
          title: playlistTitle          
        }
      }),
      invalidatesTags: ['Playlists'],
    })
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useLikeASongMutation,
  useDeleteLikeASongMutation,
  useSignUpUserMutation,
  useLogInAndUpdateTokenMutation,
  useGetSongsQuery,
  useAddSongMutation,
  useDeleteSongMutation,
  useGetGenresQuery,
  useLazyGetGenreByIdQuery,
  useGetPlaylistsQuery,
  useGetPlaylistsByUserQuery,
  useLazyGetSinglePlaylistQuery,
  useAddSongToPlaylistMutation,
  useAddPlaylistMutation,
  useUpdateSongMutation,
  useDeletePlaylistMutation,
  useRenamePlaylistMutation
} = apiSlice;
