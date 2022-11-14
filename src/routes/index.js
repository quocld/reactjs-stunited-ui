//Layouts
import Home from '~/pages/Home';
import WhoWeAre from '~/pages/WhoWeAre';
import Fortfolio from '~/pages/Portfolio';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-software', component: WhoWeAre },
    { path: '/st-digital', component: WhoWeAre },
    { path: '/st-incubation', component: WhoWeAre },
    { path: '/who-we-are', component: WhoWeAre },
    { path: '/portfolio', component: Fortfolio },
    { path: '/join-us', component: WhoWeAre },
    { path: '/lets-talk', component: WhoWeAre },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
