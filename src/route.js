import Category from './pages/Category/Category';
import Homepage from './pages/Homepage/Homepage';
import Post from './pages/Post/Post';

const route = [
    { path: '/', exact: true, component: <Homepage /> },
    { path: '/post/:id', exact: false, component: <Post /> },
    { path: '/category/:id', exact: false, component: <Category /> }
]

export default route;