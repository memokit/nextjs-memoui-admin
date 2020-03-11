
const drawerWidth = 240;
//theme


const style = theme => ({
    appMenuRoot: {
        marginTop: theme.mixins.toolbar.minHeight,
    },
    appMenu: {
        width: '100%',
        marginTop: '10px',
    },
    navList: {
        width: drawerWidth,
    },
    menuItem: {
        width: drawerWidth,
    },
    menuItemIcon: {
        color: '#97c05c',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        
    },
    drawerOpen: {
        width: drawerWidth + 1,
        backgroundColor: theme.palette.grey[900],
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        backgroundColor: theme.palette.grey[900],
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
});

export default style;