# ROLEGATE RBAC React Application

## Description

This project is a Role-Based Access Control (RBAC) application built using React. It is designed to manage user access and permissions based on three predefined roles: Admin, Editor, and Viewer. Each role has specific access permissions to interact with the user data. The application also includes a dashboard showing user statistics and a table listing all users with filtering options for roles and status.

## Features

- **User Data API:** A Mock API is used for all CRUD operations on user data.
- **Authentication:** Users log in using credentials provided by the organization.
- **Dashboard:** Displays total number of users, active users, and inactive users.
- **User Table:** Lists all users with filters for role and status.
- **Role-Based Access:**
  - **Admin:** Full CRUD (Create, Read, Update, Delete) operations and can toggle user status between active and inactive.
  - **Editor:** Can edit user information and toggle user status.
  - **Viewer:** Can only view user details.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rbac-react-app.git
   cd rbac-react-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Usage

1. Log in using credentials provided by the organization.
2. Based on your role, interact with the application as follows:

   - **Admin:**
     - View the dashboard with user statistics.
     - Manage users via the table (add, edit, delete users, and toggle status).
   - **Editor:**
     - View the dashboard with user statistics.
     - Edit user details and toggle user status.
   - **Viewer:**
     - View the dashboard with user statistics.
     - View user details in the table.

3. Log in using credentials provided by the organization. Use the following predefined users to access the application:
   ```javascript
   {
     id: 1,
     name: 'Alice Johnson',
     role: 'Admin',
     status: 'Active',
     username: 'alice',
     password: 'admin123',
     email: 'alice.johnson@example.com',
     phone: '+1-555-123-4567',
     lastLogin: '2024-11-28T08:45:00Z',
   },
   {
     id: 2,
     name: 'Bob Smith',
     role: 'Editor',
     status: 'Active',
     username: 'bob',
     password: 'editor123',
     email: 'bob.smith@example.com',
     phone: '+1-555-987-6543',
     lastLogin: '2024-11-27T14:20:00Z',
   },
   {
     id: 3,
     name: 'Charlie Brown',
     role: 'Viewer',
     status: 'Active',
     username: 'charlie',
     password: 'viewer123',
     email: 'charlie.brown@example.com',
     phone: '+1-555-234-5678',
     lastLogin: '2024-11-25T09:15:00Z',
   }
   ```

## Application Structure

- **Login Page:**
  - Secure login mechanism to authenticate users.
- **Dashboard:**

  - Total number of users.
  - Total number of active users.
  - Total number of inactive users.

- **User Management Table:**
  - Displays user details including name, role, and status.
  - Filter options:
    - Role (Admin, Editor, Viewer)
    - Status (Active, Inactive)

## Technologies Used

- **Frontend:** React, React Router
- **Styling:** react-Bootstrap

---
