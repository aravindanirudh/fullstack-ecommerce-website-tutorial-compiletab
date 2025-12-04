import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* Path refers to the URL path and the element refers to the component to be rendered */}
      <Route path="/" element={<UserLayout />}>{/* User Layout */}</Route>
      <Route>{/* Admin Layout */}</Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App