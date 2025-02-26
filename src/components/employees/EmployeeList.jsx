import { useState, useEffect } from "react"
import { getStaffUsers } from "../../services/UserService"
import { User } from "../users/User"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeList) => {
            setEmployees(employeeList)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map(employeeObj => {
                return (
                    <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
                        <User user={employeeObj}/>
                    </Link>
                )
            })}
        </div>
    )
}