import { NavBar } from "./components/nav/NavBar"
import { Welcome } from "./components/welcome/Welcome"
import { TicketList } from "./components/tickets/TicketList"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { Routes, Route, Outlet } from "react-router-dom"
import "./App.css"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<><NavBar/> <Outlet/></>}>
        <Route index element={<Welcome/>}/>
        <Route path="tickets" element={<TicketList/>}/>
        <Route path="employees" element={<EmployeeList/>}/>
        <Route path="customers">
          <Route index element={<CustomerList/>}/>
          <Route path=":customerId" element={<>Customer Details</>}/>
        </Route>
      </Route>
    </Routes>
  )
}
