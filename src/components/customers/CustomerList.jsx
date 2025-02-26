import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/UserService"
import { User } from "../users/User"
import "./Customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customersArray) => {
            setCustomers(customersArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map(customerObj => {
                return <User user={customerObj}  key={customerObj.id}/>
            })}
        </div>
    )
}