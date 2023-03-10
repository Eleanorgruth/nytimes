import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { NavProps } from '../../TypeUtilities/Interfaces';
import { NavLink } from 'react-router-dom';

const NavDrawer: FC<NavProps> = ({setTopStoriesCategory}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Home", "Insider", "Movies", "Obituaries", "Opinion", "Politics", "Science", "Sports", "Technology", "Theater", "Travel", "Upshot", "US", "World"].map((text) => (
          <ListItem key={text} disablePadding>
            <NavLink to="/" className="nav-link">
            <ListItemButton onClick={()=> {
              setTopStoriesCategory(text.toLocaleLowerCase())
            }}>
              <ListItemText primary={text} />
            </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)}>Open Drawer</MenuIcon>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}

export default NavDrawer