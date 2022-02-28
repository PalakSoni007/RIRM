import Color from 'color';
import theme from '../@vex/utils/tailwindcss';

export const euLabels = [
  {
    text: 'Active',
    backgroundColor: Color(theme.colors.green['500']).fade(0.9),
    color: theme.colors.green['500']
  },
  {
    text: 'Inactive',
    backgroundColor: Color(theme.colors.red['500']).fade(0.9),
    color: theme.colors.red['500']
  },
  {
    text: 'In Progress',
    backgroundColor: Color(theme.colors.teal['500']).fade(0.9),
    color: theme.colors.teal['500']
  },
  {
    text: 'Completed',
    backgroundColor: Color(theme.colors.purple['500']).fade(0.9),
    color: theme.colors.purple['500']
  },
];

export const userManagementData = [
  {
    id: 1,
    companyName: 'Admin',
    name: 'Admin User',
    email: 'admin@gmail.com',
    password:'RIRM@26022022',
    phoneNumber: '+91(818)580-3557',
    role: 'Admin',
  },
  {
    id: 2,
    companyName: 'Company1',
    name: 'First User',
    email: 'firstuser01@gmail.com',
    password:'RIRM@26022022',
    phoneNumber: '+91(818)580-3557',
    role: 'User',
  },
  {
    id: 3,
    companyName: 'Company2',
    name: 'Second User',
    email: 'seconduser01@gmail.com',
    password:'RIRM@26022022',
    phoneNumber: '+91(455)580-3557',
    role: 'User',
  },
  {
    id: 4,
    companyName: 'Company3',
    name: 'Third User',
    email: 'thirduser01@gmail.com',
    password:'RIRM@26022022',
    phoneNumber: '+91(818)454-3557',
    role: 'User',
  },
  {
    id: 5,
    companyName: 'Company4',
    name: 'Fourth User',
    email: 'fourthuser01@gmail.com',
    password:'RIRM@26022022',
    phoneNumber: '+91(456)473-3557',
    role: 'User',
  },
];
