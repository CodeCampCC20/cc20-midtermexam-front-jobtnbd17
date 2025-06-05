import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import TodolistPage from "../pages/TodolistPage";
import RegisterPage from "../pages/RegisterPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage/>}/>
          <Route path="todolist" element={<TodolistPage/>}/>
          <Route path="Register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
