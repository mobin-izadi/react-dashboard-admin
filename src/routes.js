import Home from './pages/Home/Home'
import Users from './pages/Users/Users'

const routes = [
    {
        path: '/', element: <Home />
    },
    {
        path: '/users', element: <Users />
    },
]

export default routes