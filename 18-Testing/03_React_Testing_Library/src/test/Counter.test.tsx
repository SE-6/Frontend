import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '@/components';

describe('Counter Component', () => {
  describe('Initial Rendering', () => {
    it('renders with default initial value of 0', () => {
      render(<Counter />);
      expect(
        screen.getByRole('heading', { name: /counter component/i }),
      ).toBeInTheDocument();
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders with custom initial value', () => {
      render(<Counter initialValue={5} />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('renders all buttons', () => {
      render(<Counter />);

      expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /reset/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    });
  });
});

describe('Button functionality', () => {
  it('increments counter when + button is clicked', () => {
    // Arrange
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', { name: '+' });

    // Act
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    // Assert
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('decements counter when - button is clicked', () => {
    // Arrange
    render(<Counter initialValue={5} />);
    const decrementBtn = screen.getByRole('button', { name: '-' });

    // Act
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    // Assert
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('resets counter to initial value when reset button is clicked', () => {
    // Arrange
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', { name: '+' });
    const resetBtn = screen.getByRole('button', { name: /reset/i });

    // Act
    fireEvent.click(incrementBtn);
    fireEvent.click(resetBtn);

    // Assert
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

describe('Conditional Messages', () => {
  it('shows zero message when counter is at 0', () => {
    // Arrange
    render(<Counter initialValue={0} />);
    // Assert
    expect(screen.getByText('Counter is at zero!')).toBeInTheDocument();
  });
  it('hides zero message when counter is not at 0', () => {
    // Arrange
    render(<Counter initialValue={1} />);
    // Assert
    expect(screen.queryByText('Counter is at zero!')).not.toBeInTheDocument();
  });
  it('shows zero message when counter reaches 0 after decrementing', () => {
    // Arrange
    render(<Counter initialValue={1} />);
    const decrementBtn = screen.getByRole('button', { name: '-' });
    // Act
    fireEvent.click(decrementBtn);
    // Assert
    expect(screen.getByText('Counter is at zero!')).toBeInTheDocument();
  });

  it('hides zero message when counter leaves 0', () => {
    // Arrange
    render(<Counter initialValue={0} />);
    const incrementBtn = screen.getByRole('button', { name: '+' });
    // Act
    fireEvent.click(incrementBtn);
    // Assert
    expect(screen.queryByText('Counter is at zero!')).not.toBeInTheDocument();
  });
  it('shows milestone message when counter reaches 10', () => {
    // Arrange
    render(<Counter initialValue={9} />);
    const incrementBtn = screen.getByRole('button', { name: '+' });
    // Act
    fireEvent.click(incrementBtn);
    // Assert
    expect(screen.getByText("Great! You've reached 10!")).toBeInTheDocument();
  });
  it('shows milestone message when counter is above 10', () => {
    // Arrange
    render(<Counter initialValue={15} />);
    // Assert
    expect(screen.getByText("Great! You've reached 15!")).toBeInTheDocument();
  });
  it('hides milestone message when counter goes below 10', () => {
    // Arrange
    render(<Counter initialValue={10} />);
    const decrementBtn = screen.getByRole('button', { name: '-' });
    // Act
    fireEvent.click(decrementBtn);
    // Assert
    expect(
      screen.queryByText(/great! you've reached/i),
    ).not.toBeInTheDocument();
  });
  it('updates milestone message text as counter value changes', () => {
    // Arrange
    render(<Counter initialValue={10} />);
    const incrementBtn = screen.getByRole('button', { name: '+' });
    // Act
    fireEvent.click(incrementBtn);
    // Assert
    expect(screen.getByText("Great! You've reached 11!")).toBeInTheDocument();
  });
});
