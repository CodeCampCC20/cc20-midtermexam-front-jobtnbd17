import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import TodolistPage from "../pages/TodolistPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layout/MainLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path="todolist" element={<TodolistPage/>}/>
          <Route path="Register" element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
