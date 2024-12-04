// mockApi.js

let users = [
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
  },
  {
    id: 4,
    name: 'Diana Prince',
    role: 'Admin',
    status: 'Inactive',
    username: 'diana',
    password: 'admin456',
    email: 'diana.prince@example.com',
    phone: '+1-555-345-6789',
    lastLogin: '2024-11-05T10:30:00Z',
  },
  {
    id: 5,
    name: 'Edward Cullen',
    role: 'Editor',
    status: 'Active',
    username: 'edward',
    password: 'editor456',
    email: 'edward.cullen@example.com',
    phone: '+1-555-654-3210',
    lastLogin: '2024-11-27T16:45:00Z',
  },
  {
    id: 6,
    name: 'Fiona Hall',
    role: 'Viewer',
    status: 'Active',
    username: 'fiona',
    password: 'viewer456',
    email: 'fiona.hall@example.com',
    phone: '+1-555-567-8901',
    lastLogin: '2024-11-28T11:00:00Z',
  },
  {
    id: 7,
    name: 'George Harris',
    role: 'Admin',
    status: 'Active',
    username: 'george',
    password: 'admin789',
    email: 'george.harris@example.com',
    phone: '+1-555-432-1098',
    lastLogin: '2024-11-26T12:30:00Z',
  },
  {
    id: 8,
    name: 'Hannah Lee',
    role: 'Editor',
    status: 'Inactive',
    username: 'hannah',
    password: 'editor789',
    email: 'hannah.lee@example.com',
    phone: '+1-555-876-5432',
    lastLogin: '2024-11-15T13:00:00Z',
  },
  {
    id: 9,
    name: 'Isaac Newton',
    role: 'Viewer',
    status: 'Active',
    username: 'isaac',
    password: 'viewer789',
    email: 'isaac.newton@example.com',
    phone: '+1-555-234-8765',
    lastLogin: '2024-11-28T08:30:00Z',
  },
  {
    id: 10,
    name: 'Jack Sparrow',
    role: 'Admin',
    status: 'Active',
    username: 'jack',
    password: 'admin101',
    email: 'jack.sparrow@example.com',
    phone: '+1-555-678-1234',
    lastLogin: '2024-11-29T09:45:00Z',
  },
  {
    id: 11,
    name: 'Katherine Watson',
    role: 'Editor',
    status: 'Active',
    username: 'katherine',
    password: 'editor101',
    email: 'katherine.watson@example.com',
    phone: '+1-555-345-4321',
    lastLogin: '2024-11-28T15:30:00Z',
  },
  {
    id: 12,
    name: 'Laura Grant',
    role: 'Viewer',
    status: 'Inactive',
    username: 'laura',
    password: 'viewer101',
    email: 'laura.grant@example.com',
    phone: '+1-555-567-1234',
    lastLogin: '2024-11-10T08:00:00Z',
  },
  {
    id: 13,
    name: 'Michael Scott',
    role: 'Admin',
    status: 'Active',
    username: 'michael',
    password: 'admin202',
    email: 'michael.scott@example.com',
    phone: '+1-555-432-5432',
    lastLogin: '2024-11-28T18:00:00Z',
  },
  {
    id: 14,
    name: 'Nina Parker',
    role: 'Editor',
    status: 'Active',
    username: 'nina',
    password: 'editor202',
    email: 'nina.parker@example.com',
    phone: '+1-555-876-2345',
    lastLogin: '2024-11-28T20:15:00Z',
  },
  {
    id: 15,
    name: 'Oscar Wilde',
    role: 'Viewer',
    status: 'Active',
    username: 'oscar',
    password: 'viewer202',
    email: 'oscar.wilde@example.com',
    phone: '+1-555-321-6789',
    lastLogin: '2024-11-28T17:10:00Z',
  },
  {
    id: 16,
    name: 'Paul Allen',
    role: 'Admin',
    status: 'Active',
    username: 'paul',
    password: 'admin303',
    email: 'paul.allen@example.com',
    phone: '+1-555-654-4321',
    lastLogin: '2024-11-29T06:50:00Z',
  },
  {
    id: 17,
    name: 'Quincy Adams',
    role: 'Editor',
    status: 'Inactive',
    username: 'quincy',
    password: 'editor303',
    email: 'quincy.adams@example.com',
    phone: '+1-555-432-1097',
    lastLogin: '2024-11-02T11:40:00Z',
  },
  {
    id: 18,
    name: 'Rebecca Black',
    role: 'Viewer',
    status: 'Active',
    username: 'rebecca',
    password: 'viewer303',
    email: 'rebecca.black@example.com',
    phone: '+1-555-876-5432',
    lastLogin: '2024-11-28T14:00:00Z',
  },
  {
    id: 19,
    name: 'Sam Wilson',
    role: 'Admin',
    status: 'Active',
    username: 'sam',
    password: 'admin404',
    email: 'sam.wilson@example.com',
    phone: '+1-555-987-1234',
    lastLogin: '2024-11-29T09:00:00Z',
  },
  {
    id: 20,
    name: 'Tina Bell',
    role: 'Editor',
    status: 'Active',
    username: 'tina',
    password: 'editor404',
    email: 'tina.bell@example.com',
    phone: '+1-555-123-7890',
    lastLogin: '2024-11-28T10:10:00Z',
  },
];

// Mock API to fetch all users
export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500);
  });
};

// Helper function to map roles to permissions
const rolePermissionsMap = {
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

// Mock API to change permissions based on user role
export const changePermissions = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const updatedUser = {
        ...user,
        permissions: rolePermissionsMap[user.role] || [],
      };
      resolve(updatedUser);
    }, 500);
  });
};

// Mock API to update a user
export const updateUser = (updatedUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate input
      if (!updatedUser || typeof updatedUser.id === 'undefined') {
        reject(new Error('Invalid user object or user ID is missing'));
        return;
      }

      const index = users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        // Update user details
        users[index] = { ...users[index], ...updatedUser };

        // Update permissions
        changePermissions(users[index])
          .then((updatedUserWithPermissions) => {
            users[index] = updatedUserWithPermissions;
            resolve({ ...users[index] });
          })
          .catch((error) => {
            reject(new Error('Failed to update permissions: ' + error.message));
          });
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
};

// Mock API to create a new user
export const createUser = (newUser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Auto-generate unique ID for new user
      const newId = Math.max(0, ...users.map((user) => user.id)) + 1;
      newUser.id = newId;

      // Check for duplicate username or email
      if (
        users.some(
          (user) =>
            user.username === newUser.username || user.email === newUser.email
        )
      ) {
        reject(new Error('Username or email already exists'));
        return;
      }

      // Add new user to the list
      users.push(newUser);
      resolve(newUser);
    }, 500);
  });
};

// Mock API to delete a user
export const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validate userId
      if (typeof userId === 'undefined') {
        reject(new Error('User ID is undefined'));
        return;
      }

      const userIndex = users.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1)[0];
        resolve(deletedUser);
      } else {
        reject(new Error('User not found'));
      }
    }, 500);
  });
};
