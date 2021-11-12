import { ArrowDown, ArrowUp, Home, Paperclip, BarChart, Cast } from "react-feather";

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <Home />,
        iconClosed: <ArrowDown />,
        iconOpen: <ArrowUp />,
        subNav: [
            {
                title: 'Users',
                path: '/users',
                icon: <Paperclip />,
            }
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <Home/>,
        iconClosed: <ArrowDown />,
        iconOpen: <ArrowUp />,
        subNav: [
            {
                title: 'Revenue 1',
                path: '/revenue-1',
                icon: <BarChart/>
            },
            {
                title: 'Revenue 2',
                path: '/revenue-2',
                icon: <BarChart/>
            }
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <Cast/>
    }
]