// import { render } from '@testing-library/react';
// import ActivityFeedItems from './ActivityFeedItems';
// import '@testing-library/jest-dom/extend-expect';

// describe('ActivityFeedItems component', () => {
//   test('renders activity feed item with correct details', () => {
//     const activity = {
//       id: '1',
//       createdBy: 'John Doe',
//       priority: 'LOW',
//       completed: false,
//       todo: 'Completed a task',
//       hours: '10',
//       minutes: '30',
//       date: '12',
//       month: 'June',
//       year: '2024',
//     };

//     const { getByText, getByAltText } = render(<ActivityFeedItems {...activity} />);

//     const createdByText = getByText(/John Doe/i);
//     const todoText = getByText(/\$Completed a task/i);
//     const timestampText = getByText(/June 12, 2024 at 10:30/i);
//     const avatarImage = getByAltText('avatar');

//     expect(createdByText).toBeInTheDocument();
//     expect(todoText).toBeInTheDocument();
//     expect(timestampText).toBeInTheDocument();
//     expect(avatarImage).toBeInTheDocument();
//   });

//   test('renders correct avatar image based on minutes', () => {
//     const activityWithEvenMinutes = {
//       id: '1',
//       createdBy: 'John Doe',
//       priority: 'LOW',
//       completed: false,
//       todo: 'Completed a task',
//       hours: '10',
//       minutes: '30',
//       date: '12',
//       month: 'June',
//       year: '2024',
//     };

//     const activityWithOddMinutes = {
//       id: '2',
//       createdBy: 'Jane Doe',
//       priority: 'LOW',
//       completed: false,
//       todo: 'Started a task',
//       hours: '11',
//       minutes: '31',
//       date: '13',
//       month: 'July',
//       year: '2024',
//     };

//     const { getByAltText, rerender } = render(<ActivityFeedItems {...activityWithEvenMinutes} />);
//     const evenMinutesAvatar = getByAltText('avatar');
//     expect(evenMinutesAvatar).toHaveAttribute('src', '/Avatar-1.svg');

//     rerender(<ActivityFeedItems {...activityWithOddMinutes} />);
//     const oddMinutesAvatar = getByAltText('avatar');
//     expect(oddMinutesAvatar).toHaveAttribute('src', '/Avatar-2.svg');
//   });
// });
