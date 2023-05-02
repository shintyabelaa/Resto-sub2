import ExploreRestaurants from '../views/pages/explore-restaurants';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ExploreRestaurants,
  '/home': ExploreRestaurants,
  '/favorites': Favorite,
  '/detail/:id': Detail,
};

export default routes;
