import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/route"
const App = () => {
  const routers =createBrowserRouter(routes)
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}

export default App
