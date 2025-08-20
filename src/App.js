import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Pastikan semua komponen halaman sudah di-import dari './components'
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        {/* Route untuk halaman utama */}
        <Route path='/' exact element={<Feed />} />
        
        {/* Route untuk halaman detail video */}
        <Route path='/video/:id' element={<VideoDetail />} />

        {/* Route untuk halaman detail channel */}
        <Route path='/channel/:id' element={<ChannelDetail />} />

        {/* Route untuk halaman hasil pencarian */}
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;