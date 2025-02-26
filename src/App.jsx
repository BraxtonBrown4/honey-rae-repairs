import { TicketList } from "./components/tickets/TicketList"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { Routes, Route } from "react-router-dom"
import "./App.css"

export const App = () => {
  return (
    <Routes>
      <Route path="/tickets" element={<TicketList/>}/>
    </Routes>
  )
}
