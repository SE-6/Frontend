// import { render, screen } from '@testing-library/react';

// render(<Counter/>)
// // mounts the component into a Virtual-DOM like openint it in a browser, but in memory

// // screen
// // represents everything currently rendered on the Virtual-DOM

// screen.getByRole('button', {name: /reset/i})
// screen.getByPlaceholderText(/search/i)
// screen.getByLabelText(/email/i)

// expect(screen.getByText('0')).toBeInTheDocument

// fireEvent.click('button');
// fireEvent.change(input, {target: {value: 'Alice'}})

// AAA
// ARANGE => ACT => ASSERT PATTERN

// it('increments counter when + is clicked', () => {
//     // Arrange => set up the component and find what you need
//     render(<Counter/>);
//     const incremenentBtn = screen.getByRole('button', {name: '+'});

//     // Act => do what the user would do
//     fireEvent.click(incremenentBtn);
//     fireEvent.click(incremenentBtn);

//     // ASSERT => check what the user would see
//     expect(screen.getByTexT('2')).toBeInTheDocument();
// })
