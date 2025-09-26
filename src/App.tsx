import { RouterProvider } from "./context/Router"
import { AppRouter } from "./components/AppRouter"

export default function App() {
  return (
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  )
}