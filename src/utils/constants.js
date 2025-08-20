import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MasksIcon from '@mui/icons-material/Masks';
import BrushIcon from '@mui/icons-material/Brush';
import ArticleIcon from '@mui/icons-material/Article';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TimerIcon from '@mui/icons-material/Timer';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import VideocamIcon from '@mui/icons-material/Videocam';

export const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png';

export const categories = [
  { name: 'New Trailers', icon: <MovieCreationIcon />, },
  { name: 'Trending Movies', icon: <WhatshotIcon />, },
  { name: 'Tara Arts Movie', icon: <VideocamIcon />, }, // Kategori Demo
  { name: 'Short Film', icon: <TimerIcon />, },
  { name: 'Web Series', icon: <SubscriptionsIcon />, },
  { name: 'Action', icon: <LocalFireDepartmentIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Sci-Fi', icon: <PsychologyIcon />, },
  { name: 'Drama', icon: <MasksIcon />, },
  { name: 'Animation', icon: <BrushIcon />, },
  { name: 'Documentary', icon: <ArticleIcon />, },
  { name: 'Romance', icon: <FavoriteIcon />, },
  { name: 'Horror', icon: <MovieFilterIcon />, },
  // Kategori Family s/d Classic Film sudah dihapus sesuai permintaan
  { name: "Behind the Scenes", icon: <CameraRollIcon /> },
];

// Data demo merujuk ke video "DRAGON SUMMONER" dari Tara Arts Movie
export const demoThumbnailUrl = 'https://i.ytimg.com/vi/QdvTsx-C-HM/hq720.jpg';
export const demoChannelUrl = '/channel/UCrbkLNFTHuOPJi_Dy6q9gcQ';
export const demoVideoUrl = '/video/QdvTsx-C-HM';
export const demoChannelTitle = 'Tara Arts Movie';
export const demoVideoTitle = 'DRAGON SUMMONER - After Effects Series';
export const demoProfilePicture = 'https://yt3.googleusercontent.com/ytc/AIdro_k2iZgLFEz-2A6_4p-P-o-T-wz7-P6-yP6-8Q=s176-c-k-c0x00ffffff-no-rj';