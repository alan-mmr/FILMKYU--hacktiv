import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';


import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';
import { indoChannelIds } from '../utils/constants';



const Feed = () => {

    const [selectedCategory, setselectedCategory] = useState('New Film');

    const [videos, setVideos] = useState([]);

  
    useEffect(() => {
      const fetchData = async () => {
        let query = '';
        let extra = '';

        if (selectedCategory === 'New Film') {
          // Indonesian films (non-shorts): filter via query and duration >= 60s on client (avoid cutting trailers)
          query = 'film Indonesia|film pendek Indonesia|short film Indonesia|movie Indonesia';
          extra = '&type=video';
        } else if (selectedCategory === 'New Trailers') {
          query = 'trailer Indonesia|teaser Indonesia|official trailer Indonesia';
          extra = '&type=video';
        } else if (selectedCategory === 'Trending Movies') {
          query = 'film Indonesia';
          extra = '&type=video&order=date';
        } else if (selectedCategory === 'Movie Channel') {
          // Fetch curated Indonesian movie/short-film channels
          const ids = indoChannelIds.join(',');
          const channels = await fetchFromAPI(`channels?part=snippet,statistics&id=${ids}`);
          setVideos(channels?.items || []);
          return;
        } else {
          query = `${selectedCategory} Indonesia`;
          extra = '&type=video';
        }

        const res = await fetchFromAPI(`search?part=snippet&q=${encodeURIComponent(query)}${extra}`);
        setVideos((res?.items || []).filter(v => v?.id?.videoId));
      };

      fetchData();
    }, [selectedCategory]);



     //DEBUGGING
      console.log('Kategori yang dipilih:', selectedCategory);
  const apiUrl = `search?part=snippet&q=${selectedCategory}`;
  console.log('URL yang akan dipanggil:', apiUrl);

    return(
    <Stack sx={{ flexDirection: { 
        sx: " column", md : "row" } }}>
          <Box sx={{ height: { 
            sx: 'auto', md: '92vh' },
              borderRight: '1px solid #3d3d3d',
                px: { sx: 0, md: 2 } }}>
                  <Sidebar 
                  selectedCategory={selectedCategory}
                  setselectedCategory={setselectedCategory}/>

                  <Typography className="copyright" 
                  variant="body2" sx={{ mt:1.5, color:'#fff' }}> 
                    @Copyright 2025 PARLORD Studio
                  </Typography>
          </Box>

          <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex:'2'}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white' }}>
              {selectedCategory}
            </Typography>

            <Videos videos={videos} />
          </Box>
      </Stack>
)}


export default Feed