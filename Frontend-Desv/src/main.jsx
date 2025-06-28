import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomeTab from './Home-Compo/HomeTab.jsx';
import ShowProductTab from './Show-Compo/ShowProductTab.jsx';
import CategoryGrid from './UserFirst-compo/CategoryGrid'
import AffiliateLinkManager from './Update-compo/AffiliateLinkManager'
import ViewCategoryTab from './Category-View-compo/ViewCategoryTab'
import AddProductSite from '../Admin-pannel/AddProductSite.jsx'
import UpdateProducts from '../Admin-pannel/UpdateProducts.jsx'

/*store configurations*/
import { Provider } from 'react-redux';
import { store } from '../store/store.js';
  
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <CategoryGrid /> },
     /* { path: 'category/:category', element: <HomeTab /> },*/
      { path: 'category/:category/show/:id', element: <ShowProductTab /> },
      { path: 'category/:category', element: <ViewCategoryTab /> },
      { path: 'add-product', element: <AddProductSite /> },
      { path: 'update-product', element: <UpdateProducts /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
