import Layout from "../layout/layout";
import Photos from "../pages/photos";
import Cart from "../pages/cart";

const routes = [{
    path:"/",
    element: <Layout/>,
    children:[
        {
            index:true,
            element:<Photos/>
        },
        {
            path:"cart",
            element:<Cart/>
        }
    ]
}]

export default routes