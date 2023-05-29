import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./css/sb-admin-2.min.css";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Createuser from "./Createuser";
import Userview from "./Userview";
import ProductCreate from "./ProductCreate";
import ProductView from "./ProductView";
import ProductEdit from "./ProductEdit";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/create-product" element={<ProductCreate />} />
              <Route path="/create-user" element={<Createuser />} />
              <Route path="/user/view/:id" element={<Userview />} />
              <Route path="/product/view/:id" element={<ProductView />} />
              <Route path="/product/edit/:id" element={<ProductEdit />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
