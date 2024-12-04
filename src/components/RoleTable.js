import React from 'react';
import {
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
  Form,
  Card,
} from 'react-bootstrap';
import {
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaPlusCircle,
  FaAngleDown,
} from 'react-icons/fa';
import UserDetailsModal from './UserDetailsModal';
import EditUserModal from './EditUserModal';
import CreateUserModal from './CreateUserModal';
import DeleteModal from './DeleteModal';
import {
  updateUser,
  changePermissions,
  createUser,
  deleteUser,
} from './mockApi';
import './RoleTable.css';

const RoleTable = ({ users, currentUser, onUpdateUser }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [roleFilter, setRoleFilter] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');

  const permissions = {
    Admin: [
      'Create',
      'Update',
      'Read',
      'Delete',
      'Add User',
      'Delete User',
      'Change Role',
      'Change Status',
    ],
    Editor: ['Update', 'Read', 'Change Status'],
    Viewer: ['Read'],
  };

  const hasPermission = (permission) => {
    return permissions[currentUser.role]?.includes(permission);
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCreateUser = async (newUser) => {
    console.log('Creating new user:', newUser);
    try {
      const createdUser = await createUser(newUser);
      console.log('User created successfully:', createdUser);
      onUpdateUser(createdUser);
      setShowCreateModal(false);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      if (selectedUser) {
        await deleteUser(selectedUser.id);
        console.log('User deleted successfully');
        onUpdateUser();
        setShowDeleteModal(false);
        setSelectedUser(null);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedUser(null);
  };

  const handleSaveEdit = async (updatedUser) => {
    try {
      const updatedUserDetails = await updateUser(updatedUser);

      if (
        currentUser.role === 'Admin' &&
        updatedUserDetails.id !== currentUser.id
      ) {
        const updatedUserWithPermissions = await changePermissions(
          updatedUserDetails
        );
        onUpdateUser(updatedUserWithPermissions);
      }

      if (updatedUserDetails.id === currentUser.id) {
        localStorage.setItem('currentUser', JSON.stringify(updatedUserDetails));
      }

      setShowEditModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Filter users based on role and status
  const filteredUsers = users.filter((user) => {
    const roleMatch = roleFilter ? user.role === roleFilter : true;
    const statusMatch = statusFilter ? user.status === statusFilter : true;
    return roleMatch && statusMatch;
  });

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === 'Active').length;
  const inactiveUsers = users.filter(
    (user) => user.status === 'Inactive'
  ).length;

  return (
    <div className="table-container">
      <div className="role-table-container">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="text-left text-light">User Management Dashboard</h2>
          {currentUser.role === 'Admin' && (
            <Button variant="success" onClick={() => setShowCreateModal(true)}>
              <FaPlusCircle /> Add User
            </Button>
          )}
        </div>
        <div className="d-flex  mb-4  info-card">
          <Card className=" text-center text-white card-user">
            <Card.Body>
              <h2>Total Users</h2>
              <Card.Text>{totalUsers}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center stats-card   card-users">
            <Card.Body>
              <h2>Active Users</h2>
              <Card.Text>{activeUsers}</Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center stats-card   card-users-red">
            <Card.Body>
              <h2>Inactive Users</h2>
              <Card.Text>{inactiveUsers}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* Filter Options */}
        <div className="filter-container">
          <h5 className="filter-heading">Filter Options</h5>
          <div className="mb-3 filter-controls">
            <Form.Control
              as="select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="filter-select-role"
            >
              <FaAngleDown />
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </Form.Control>
            <Form.Control
              as="select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Form.Control>
          </div>
        </div>

        <Table
          striped
          bordered
          hover
          responsive
          className="table-dark table-hover vh-20  shadow table-custom"
          style={{
            height: '30vh',
            overflow: 'scroll',
          }}
        >
          <thead className="table-head">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td
                  className={
                    user.status === 'Active' ? 'text-successs' : 'text-dangerr'
                  }
                >
                  {user.status}
                </td>
                <td className="actions-cell">
                  {hasPermission('Read') && (
                    <OverlayTrigger overlay={<Tooltip>View Details</Tooltip>}>
                      <Button
                        variant="outline-info"
                        className="action-btn"
                        onClick={() => handleViewDetails(user)}
                      >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                  )}
                  {hasPermission('Update') && (
                    <OverlayTrigger overlay={<Tooltip>Edit User</Tooltip>}>
                      <Button
                        variant="outline-warning"
                        className="action-btn"
                        onClick={() => handleEditUser(user)}
                      >
                        <FaEdit />
                      </Button>
                    </OverlayTrigger>
                  )}
                  {hasPermission('Delete') && (
                    <OverlayTrigger overlay={<Tooltip>Delete User</Tooltip>}>
                      <Button
                        variant="outline-danger"
                        className="action-btn"
                        onClick={() => {
                          setSelectedUser(user);
                          setShowDeleteModal(true);
                        }}
                      >
                        <FaTrashAlt />
                      </Button>
                    </OverlayTrigger>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* User Details Modal */}
        {showModal && (
          <UserDetailsModal
            show={showModal}
            user={selectedUser}
            onHide={handleCloseModal}
          />
        )}

        {/* Edit User Modal */}
        {showEditModal && (
          <EditUserModal
            show={showEditModal}
            user={selectedUser}
            currentUserRole={currentUser.role}
            onHide={handleCloseEditModal}
            onSave={handleSaveEdit}
          />
        )}

        {/* Create User Modal */}
        {showCreateModal && (
          <CreateUserModal
            show={showCreateModal}
            onHide={handleCloseCreateModal}
            onCreate={handleCreateUser}
          />
        )}

        {/* Delete User Modal */}
        {showDeleteModal && (
          <DeleteModal
            show={showDeleteModal}
            onHide={handleCloseDeleteModal}
            onDelete={handleDeleteUser}
            itemName={selectedUser ? selectedUser.name : ''}
          />
        )}
      </div>
    </div>
  );
};

export default RoleTable;
