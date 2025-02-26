import { useState, useEffect } from "react"
import { getStaffUsers } from "../../services/UserService"
import { User } from "../users/User"
import "./Employee.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        getStaffUsers().then((employeeList) => {
            setEmployees(employeeList)
        })
    }, [])

    return (
        <div className="employees">
            {employees.map(employeeObj => {
                return <User user={employeeObj} key={employeeObj.id}/>
            })}
        </div>
    )
}