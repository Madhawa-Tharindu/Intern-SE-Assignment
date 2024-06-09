// To ensure he component renders correctly and that it handles different props correctly

// import { render } from '@testing-library/react';
// import TaskItem from '../components/tasksCompo/taskItem';
// import '@testing-library/jest-dom/extend-expect'; // Import extend-expect to extend jest-dom matchers
// import { toBeInTheDocument } from '@testing-library/jest-dom';

// // Remove the triple-slash directive

// expect.extend({ toBeInTheDocument });

// describe('TaskItem component', () => {
//   test('renders task item with correct priority', () => {
//     const task = {
//       id: '1',
//       createdBy: 'John Doe',
//       priority: 'HIGH',
//       todo: 'Example task',
//       completed: false,
//       date: '12',
//       month: 'June',
//       year: '2022',
//       hours: '10',
//       minutes: '30',
//     };

//     const { getByAltText, getByText } = render(<TaskItem {...task} />);

//     const priorityImage = getByAltText(/Priority-HIGH/i);
//     const todoText = getByText(/Example task/i);

//     expect(priorityImage).toBeInTheDocument();
//     expect(todoText).toBeInTheDocument();
//   });

//   test('renders completed task item with correct status', () => {
//     const task = {
//       id: '2',
//       createdBy: 'Jane Doe',
//       priority: 'LOW',
//       todo: 'Completed task',
//       completed: true,
//       date: '15',
//       month: 'July',
//     };

//     const { getByText } = render(<TaskItem {...task} />);

//     const doneStatus = getByText(/Done/i);
//     const completionDate = getByText(/July 15/i);

//     expect(doneStatus).toBeInTheDocument();
//     expect(completionDate).toBeInTheDocument();
//   });
// });
