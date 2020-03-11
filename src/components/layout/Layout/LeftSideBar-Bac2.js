import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from "assets/jss/app/components/leftSideBar";

const useStyles = makeStyles(styles);

const LeftSideBar = () => {
  const classes = useStyles()
  const theme = useTheme();
  console.log(theme.palette);
  const [open, setOpen] = React.useState(true)
  const [openSubMenu, setOpenSubMenu] = React.useState(false)

  function handleSubMenuClick() {
    setOpenSubMenu(!openSubMenu)
  }

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <div >
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >

      
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider></Divider>
        <List component="nav" className={classes.appMenu} disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>

          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconPeople />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>

          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconBarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button onClick={handleSubMenuClick} className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconLibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Nested Pages" />
            {openSubMenu ? <IconExpandLess /> : <IconExpandMore />}
          </ListItem>
          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
              <ListItem button className={classes.menuItem}>
                <ListItemText inset primary="Nested Page 1" />
              </ListItem>
              <ListItem button className={classes.menuItem}>
                <ListItemText inset primary="Nested Page 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>

    </Drawer>
    </div>
  )
}




export default LeftSideBar;