import { ArrowDown, ArrowUp, Home, Paperclip, FileSystem, Cast } from "react-feather";

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
                icon: <FileSystem/>
            },
            {
                title: 'Revenue 2',
                path: '/revenue-2',
                icon: <FileSystem/>
            }
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <Cast/>
    }
]