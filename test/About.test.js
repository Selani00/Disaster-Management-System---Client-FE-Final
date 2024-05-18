import React from 'react';
import { render } from '@testing-library/react';
import About from '../src/Components/Home/About'; 


describe('About Component', () => {
    test('renders correctly', () => {
      const { getByText, getByAltText } = render(<About/>);
  
      // Assert that the title "About Us" is rendered
      expect(getByText('About Us')).toBeInTheDocument();
  
      // Assert that the paragraph text is rendered
      expect(
        getByText(/At the heart of Your Disaster Management System/)
      ).toBeInTheDocument();
  
      // Assert that the image is rendered with correct alt text
      expect(getByAltText('')).toBeInTheDocument(); // Update '' with your alt text
    });
  });
  