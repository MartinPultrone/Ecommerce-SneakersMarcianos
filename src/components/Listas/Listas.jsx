import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';

const Listas = () => {
  return (
    <div>
        <List component="nav">
        <ListItem button>
        <ListItemIcon>
            <CloudIcon>
            </CloudIcon>
        </ListItemIcon>
        <ListItemText primary="Women Sneakers"/>
        </ListItem>

        <ListItem button>
        <ListItemIcon>
            <BoltIcon>
            </BoltIcon>
        </ListItemIcon>
        <ListItemText primary="Men Sneakers"/>
        </ListItem>

        <Divider></Divider>
        </List>
    </div>
  )
}

export default Listas