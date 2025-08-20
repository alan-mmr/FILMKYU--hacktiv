import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Mengambil data video yang sedang diputar
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items?.[0]));

    // Mengambil data video terkait (sugesti)
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data?.items || []));
  }, [id]); // Efek ini berjalan setiap kali ID video di URL berubah

  // Tampilan loading jika data video belum siap
  if (!videoDetail?.snippet) return 'Loading...';

  // Destructuring agar kode lebih rapi
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ pt: { xs: 0, md: 1 } }}>
      <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto', px: { xs: 1, sm: 2, md: 3 } }}>
        <Stack direction={{ xs: 'column', lg: 'row' }} alignItems="flex-start" spacing={{ xs: 2, lg: 3 }}>
          <Box flex={1} sx={{ minWidth: 0 }}>
            <Box sx={{ position: 'relative', pt: '56.25%' }}>
              <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%" height="100%" controls />
              </Box>
            </Box>
            <Typography color="#fff" variant="h5" fontWeight="bold" mt={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: '100%', lg: 420 } }}>
            <Typography color="#fff" variant="h6" fontWeight="bold" mb={1}>
              Recommended
            </Typography>
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoDetail;