import { render, fireEvent } from '@testing-library/react';
import Welcome from '../components/welcomeMsg/welcomeMsg';

describe('Welcome component', () => {
  test('renders welcome message and close button', () => {
    const { getByText, getByAltText } = render(<Welcome />);
    const headingText = getByText(/Welcome back, John Doe/i);
    const subHeadingText = getByText(/The end of the year is coming./i);
    const closeButton = getByAltText(/Close button/i);

    expect(headingText).toBeInTheDocument();
    expect(subHeadingText).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  test('closes the component when close button is clicked', () => {
    const { getByAltText, queryByText } = render(<Welcome />);
    const closeButton = getByAltText(/Close button/i);

    fireEvent.click(closeButton);

    // After clicking close button, the component should not be in the document
    expect(queryByText(/Welcome back, John Doe/i)).not.toBeInTheDocument();
  });
});
