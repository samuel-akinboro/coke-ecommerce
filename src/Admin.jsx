import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
import AdminOrder from './AdminOrder';

function Admin() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
        db
        .collection('purchased')
        .onSnapshot(snapshot => setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))))
  }, [user])

  console.log(orders)

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <AdminOrder order={order} />
                ))}
            </div>
        </div>
    )
}

export default Admin
