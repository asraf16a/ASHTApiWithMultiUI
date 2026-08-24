import {
  Bell,
  Boxes,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Folder,
  HeartPulse,
  KeyRound,
  LayoutDashboard,
  Menu,
  Package,
  Pencil,
  PlusCircle,
  Search,
  Shield,
  Stethoscope,
  Tag,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";

import "./App.css";

const categories = [
  { id: 1, name: "Food" },
  { id: 2, name: "Cloth" },
  { id: 3, name: "Medical" },
  { id: 4, name: "Education" },
];

function App() {
  const [hrmOpen, setHrmOpen] = useState(true);
  const [inventoryOpen, setInventoryOpen] = useState(true);
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <HeartPulse size={30} />
          <span>Clinic ERP</span>
        </div>

        <div className="menu">

          <div className="menu-item">
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </div>

          {/* HRM */}
          <div
            className="menu-item parent"
            onClick={() => setHrmOpen(!hrmOpen)}
          >
            <Users size={17} />
            <span>HRM</span>
            {hrmOpen ? (
              <ChevronDown className="arrow" size={17} />
            ) : (
              <ChevronRight className="arrow" size={17} />
            )}
          </div>

          {hrmOpen && (
            <div className="submenu active-group">
              <div className="submenu-item">
                <Users size={16} />
                Users
              </div>

              <div className="submenu-item">
                <Shield size={16} />
                Roles
              </div>

              <div className="submenu-item">
                <KeyRound size={16} />
                Role Privileges
              </div>
            </div>
          )}

          {/* Inventory */}
          <div
            className="menu-item parent"
            onClick={() => setInventoryOpen(!inventoryOpen)}
          >
            <Package size={17} />
            <span>Inventory</span>

            {inventoryOpen ? (
              <ChevronDown className="arrow" size={17} />
            ) : (
              <ChevronRight className="arrow" size={17} />
            )}
          </div>

          {inventoryOpen && (
            <div className="submenu active-group">

              <div className="submenu-item selected">
                <Folder size={16} />
                Category
              </div>

              <div className="submenu-item">
                <Folder size={16} />
                Sub Category
              </div>

              <div className="submenu-item">
                <Boxes size={16} />
                Products
              </div>

              <div className="submenu-item">
                <DollarSign size={16} />
                Product Pricing
              </div>

            </div>
          )}

          {/* Medical */}
          <div className="menu-item parent">
            <Stethoscope size={17} />
            <span>Medical</span>
            <ChevronRight className="arrow" size={17} />
          </div>

        </div>
      </aside>

      {/* Main Area */}
      <main className="main">

        {/* Top Header */}
        <header className="top-header">

          <button className="menu-button">
            <Menu size={23} />
          </button>

          <div className="header-right">

            <div className="notification">
              <Bell size={19} />
              <span>3</span>
            </div>

            <div className="user">
              <div className="avatar">A</div>
              <strong>Admin User</strong>
            </div>

          </div>
        </header>

        {/* Page Header */}
        <div className="page-header">
          <h2>Admin Dashboard</h2>

          <div className="breadcrumb">
            Home <span>/</span> Dashboard
          </div>
        </div>

        {/* Content */}
        <section className="content">

          <div className="card">

            {/* Title */}
            <div className="category-header">

              <div>
                <div className="title">
                  <Tag size={32} />
                  <h1>Category Management</h1>
                </div>

                <p>Manage product categories</p>
              </div>

              <button className="add-button">
                <PlusCircle size={17} />
                Add Category
              </button>

            </div>

            {/* Total */}
            <div className="total-card">
              <div>Total Categories</div>
              <strong>{categories.length}</strong>
            </div>

            {/* Table Card */}
            <div className="table-card">

              {/* Search */}
              <div className="search-wrapper">
                <Search size={17} />

                <input
                  type="text"
                  placeholder="Search category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Table */}
              <table>

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th className="action-header">Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredCategories.map((category, index) => (
                    <tr key={category.id}>

                      <td>{index + 1}</td>

                      <td>{category.name}</td>

                      <td className="actions">

                        <button className="edit">
                          <Pencil size={16} />
                        </button>

                        <button className="delete">
                          <Trash2 size={16} />
                        </button>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;