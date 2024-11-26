import Home from './pages/Home/Home'
import UserDetails from './pages/Users/UserDetails'
import Users from './pages/Users/Users'

const routes = [
    {
        path: '/', element: <Home />
    },
    {
        path: '/users', element: <Users />
    },
    {
        path: '/users/:id', element: <UserDetails />
    },
]

export default routes
