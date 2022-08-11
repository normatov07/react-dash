
import * as React from 'react';

import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

// For Form Input
import SendIcon from '@mui/icons-material/Send';
import MoodIcon from '@mui/icons-material/Mood';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { Container, Stack, Card, Avatar, Badge } from '@mui/material';

// List Item Avartar
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// List Item scrooll
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

import Page from '../components/Page';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: 0,
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const arr = ['Jeyms Ken','Arnold Termun','Smart Geytz','Belli Simon','Abdulla Qodiriy','Fitrat']
function renderRow(props) {
  const { index, style } = props;
    console.log({style});
  return (
    <ListItem style={style} key={index} component="div" disablePadding >
      <ListItemButton >
      <ListItemAvatar>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="success"
                
              >
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`/static/mock-images/avatars/avatar_${index+1}.jpg`}
                  sx={styles.avatar}
                />
            </Badge>
          </ListItemAvatar>
        <ListItemText sx={{color:'black',fontStyle:'bold'}} primary={arr[index%7]} secondary={`Item ${index + 1} salom nima gap...`} />
      </ListItemButton>
    </ListItem>
  );
}

const styles = {
  iten1:{
    flex:1,
  },
  avatarSec:{
    display: 'flex',
    justifyContent: 'space-between',
    margin:'10px 10px 0 10px',
    flexWrap: 'wrap',
  },
  badge:{
    flexGrow: 1,
  },
  IconClose:{
    flexGrow: 1,
  },
  serchBars:{
    marginTop: '18px',
    marginBottom: '10px',
    marginLeft: '0px!important',
    bachgroundColor:'red'
  },
  iten2:{
    flex:4
  },
  avatar:{
    width:'48px',
    height:'48px'
  },
  UserDesc:{
    display: 'flex',
    justifyContent: 'space-between',
    margin:'10px 10px 0 10px',
    flexWrap: 'wrap',
    height:'92px'
  },
  meesageBox:{
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
  },
  meesageArea:{
    height: '400px',
    margin:0,
    // backgroundColor:'red',
    overflow: 'auto',
  },
  messageInput:{
    width:'100%',
    // height:'50px',
    // position:'relative',
    // display: 'flex',
    // alignItems: 'flex-end'
  },
  messageSend:{
    width:'100%',
  }
}

export default function MiniDrawer() {
  const theme = useTheme();

  // Form Func
const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
// end form Func


  return (
 <Page title="Dashboard: Test | Minimal-UI">
     <Card position="absolute">
     <div>
      <Stack direction="row" spacing={0}>

        <Item sx={styles.iten1}>
          <Box  sx={styles.avatarSec}>
          <div sx={styles.badge}>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="success"
                
              >
                <Avatar sx={styles.avatar} alt="Travis Howard" src="/static/mock-images/avatars/avatar_13.jpg" />
             </Badge>
          </div>
          <div sx={styles.IconClose}>
             <IconButton >
                 {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
             </IconButton>
             <IconButton >
                 {theme.direction === 'rtl' ? <EditIcon /> : <EditIcon />}
             </IconButton>
          </div>
          <div style={styles.serchBars}>
             <Search sx={{border: '1px solid'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
          </Box>

         <Box
          sx={{ width: '100%',margin:0, height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
         >
           <List >
          <FixedSizeList
            height={400}
            width={290}
            itemSize={72}
            itemCount={200}
            overscanCount={1}
          >
            {renderRow}
          </FixedSizeList>
          </List>
        </Box>

        </Item>

        <Item sx={styles.iten2}>

        <Box  sx={styles.UserDesc}>
          <div sx={styles.badge}>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="success"
                
              >
                <Avatar sx={styles.avatar} alt="Travis Howard" src="/static/mock-images/avatars/avatar_13.jpg" />
             </Badge>
          </div>
          <div sx={styles.IconClose}>
             <IconButton >
                 {theme.direction === 'rtl' ? <PhoneIcon /> : <PhoneIcon />}
             </IconButton>
             <IconButton >
                 {theme.direction === 'rtl' ? <VideocamIcon /> : <VideocamIcon />}
             </IconButton>
             <IconButton >
                 {theme.direction === 'rtl' ? <MoreVertIcon /> : <MoreVertIcon />}
             </IconButton>
          </div>
          </Box>
          <Divider />
    <Box sx={styles.meesageBox}>

          <Box sx={styles.meesageArea}>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
          </Box>
          <Divider />
          <Box sx={styles.messageInput}>
          <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
          >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MoodIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type a message..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" sx={{ p: '8px' }} aria-label="search">
            <AddPhotoAlternateIcon />
          </IconButton>
          <IconButton type="submit" sx={{ p: '8px' }} aria-label="search">
            <AttachFileIcon />
          </IconButton>
          <IconButton type="submit" sx={{ p: '8px' }} aria-label="search">
            <KeyboardVoiceIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <SendIcon />
          </IconButton>
        </Paper>
        </Box>
    </Box>
  
        </Item>
      </Stack>
    </div>
    </Card>
  </Page>
  );
}
