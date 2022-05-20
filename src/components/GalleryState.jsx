import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async ()  => {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=xfoH7z0DKeKwk0byvukM9Etd1BouUr8ytzH1j1XWKAg');
        const formattedResponse = await response.json();
        return formattedResponse
    }
)

export const gallerySlice = createSlice({
    name: 'galery',
    initialState: {
        photos: [],
        status: "idk",
    },
    extraReducers: (builder) => {
        builder
          .addCase(getPhotos.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(getPhotos.fulfilled, (state, action) => {
            state.status = 'success'
            state.photos = action.payload
          })
          .addCase(getPhotos.rejected, (state) => {
            state.status = 'failed'
          })
      },
  
});

export default gallerySlice.reducer;