import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import RoleTable from '../components/RoleTable';
import { getUsers, updateUser } from '../components/mockApi';
import Header from './Headers';

const Dashboard = ({ currentUser, onLogout }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateUser = async (updatedUser) => {
    console.log('Updating user:', updatedUser);
    try {
      const updated = await updateUser(updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === updated.id ? updated : user))
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <div className="logout-button-container">
        <Header currentUser={currentUser} />
      </div>
      <hr style={{ margin: ' 0' }} />
      <RoleTable
        users={users}
        currentUser={currentUser}
        onUpdateUser={handleUpdateUser}
      />
    </div>
  );
};

export default Dashboard;
