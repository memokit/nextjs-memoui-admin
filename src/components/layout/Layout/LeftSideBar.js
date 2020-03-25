import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from "assets/jss/app/components/leftSideBar";
import MenuItem from './MenuItem';

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Exam',
    link: '/exam',
    Icon: IconShoppingCart,
  },
  {
    name: 'Orders',
    link: '/orders',
    Icon: IconShoppingCart,
  },
  {
    name: 'Customers',
    link: '/customers',
    Icon: IconPeople,
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2',
      },
      {
        name: 'Level 2',
        items: [
          {
            name: 'Level 3',
          },
          {
            name: 'Level 3',
          },
        ],
      },
    ],
  },
  {
    name: 'Reports 2',
    link: '/reports',
    Icon: IconBarChart,
  },
]
const useStyles = makeStyles(styles);

const LeftSideBar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
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

      <div className={classes.appMenuRoot}>
        {/* <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider></Divider> */}
        <List component="nav" className={classes.appMenu} disablePadding>
          {appMenuItems.map((item, index) => (
            <MenuItem {...item} key={index} />
          ))}
        </List>
      </div>



    </Drawer>
  )
}

// const drawerWidth = 240

// const useStyles = makeStyles(theme =>
//   createStyles({
//     appMenu: {
//       width: '100%',
//     },
//     navList: {
//       width: drawerWidth,
//     },
//     menuItem: {
//       width: drawerWidth,
//     },
//     menuItemIcon: {
//       color: '#97c05c',
//     },
//   }),
// )

export default LeftSideBar
