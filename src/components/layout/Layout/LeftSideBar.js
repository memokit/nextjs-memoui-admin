
import styles from "assets/jss/app/components/leftSideBar";

const appMenuItems = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: IconDashboard,
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
]


const useStyles = makeStyles(styles);

function LeftSideBar() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            {/* <AppMenuItem {...appMenuItems[0]} /> */}
            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
        </List>
    )
}

export default LeftSideBar;