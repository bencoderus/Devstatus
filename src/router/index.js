
// Here we import our Vue Components
import Home from '../views/Home.vue';
import Status from '../views/Status.vue';
import Notfound from '../views/Notfound.vue';
// the routes are simply an array of objects
const routes = [

    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/status',
        name: 'status',
        component: Status
    },

    {
        path: '*',
        name: 'notfound',
        component: Notfound
    }
];

export default routes;