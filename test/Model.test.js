import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Model from '../src/Components/Header/Model';

describe('Model Component', () => {
  test('renders model when isVisible is true', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Model isVisible={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Model>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render model when isVisible is false', () => {
    const handleClose = jest.fn();
    const { queryByText } = render(
      <Model isVisible={false} onClose={handleClose}>
        <div>Modal Content</div>
      </Model>
    );

    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('calls onClose when clicking on the close button', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Model isVisible={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Model>
    );

    fireEvent.click(getByText('X'));
    expect(handleClose).toHaveBeenCalled();
  });

  test('calls onClose when clicking outside the modal content', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Model isVisible={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Model>
    );

    fireEvent.click(getByTestId('wrapper'));
    expect(handleClose).toHaveBeenCalled();
  });`                `
});
