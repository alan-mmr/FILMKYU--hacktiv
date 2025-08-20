import { Stack, Box} from '@mui/material';
import {VideoCard, ChannelCard } from './';


const Videos = ({videos = [], direction = 'row'}) =>  {
  return(
    <Stack direction={direction} flexWrap="wrap"
      justifyContent="start" gap={2}
    >
      {(Array.isArray(videos) ? videos : []).map((item, idx) => {
        const id = item?.id;
        const isVideo = Boolean(id?.videoId) || item?.kind === 'youtube#video';
        const isChannel = Boolean(id?.channelId) || typeof id === 'string' || item?.kind === 'youtube#channel';
        return (
          <Box key={idx}>
            {isVideo && <VideoCard video={item} />}
            {isChannel && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
      
      
      </Stack>
  )
}

export default Videos