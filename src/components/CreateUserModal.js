import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles.css';

const CreateUserModal = ({ show, onHide, onCreate }) => {
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    role: 'Viewer',
    status: 'Active',
    username: '',
    password: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  // Reset the form when the modal is hidden
  useEffect(() => {
    if (!show) {
      setNewUser({
        id: '',
        name: '',
        role: 'Viewer',
        status: 'Active',
        username: '',
        password: '',
        email: '',
        phone: '',
      });
      setErrors({});
    }
  }, [show]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newUser.name) newErrors.name = 'Name is required.';
    if (!newUser.username) newErrors.username = 'Username is required.';
    if (!newUser.password) newErrors.password = 'Password is required.';
    if (!newUser.email) newErrors.email = 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(newUser.email))
      newErrors.email = 'Invalid email format.';
    if (!/^\d+$/.test(newUser.phone))
      newErrors.phone = 'Phone must contain only numbers.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      onCreate(newUser);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Form>
          {[
            {
              label: 'ID',
              name: 'id',
              type: 'Number',
              placeholder: 'Enter ID',
            },
            {
              label: 'Name',
              name: 'name',
              type: 'text',
              placeholder: 'Enter Name',
            },
            {
              label: 'Username',
              name: 'username',
              type: 'text',
              placeholder: 'Enter Username',
            },
            {
              label: 'Password',
              name: 'password',
              type: 'password',
              placeholder: 'Enter Password',
            },
            {
              label: 'Email',
              name: 'email',
              type: 'email',
              placeholder: 'Enter Email',
            },
            {
              label: 'Phone',
              name: 'phone',
              type: 'text',
              placeholder: 'Enter Phone',
            },
          ].map((field) => (
            <Form.Group key={field.name} controlId={`formUser${field.name}`}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={newUser[field.name]}
                onChange={handleInputChange}
                isInvalid={!!errors[field.name]}
              />
              <Form.Control.Feedback type="invalid">
                {errors[field.name]}
              </Form.Control.Feedback>
            </Form.Group>
          ))}
          <Form.Group controlId="formUserRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={newUser.role}
              onChange={handleInputChange}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formUserStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={newUser.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleCreate}>
          Create User
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateUserModal;
