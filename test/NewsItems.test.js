const axios = require('axios'); // Import axios for mocking
const fetchData = require('../src/Components/News/NewsItems'); // Import the function to test

jest.mock('axios'); // Mock axios module

describe('fetchData function', () => {
  test('fetches and filters news correctly', async () => {
    // Mock the response from axios
    const mockResponse = [
      { id: 1, title: 'News 1', show: true },
      { id: 2, title: 'News 2', show: false },
      { id: 3, title: 'News 3', show: true }
    ];
    axios.post.mockResolvedValue({ data: mockResponse });

    // Mock setNews and setSelectedItem functions
    const setNews = jest.fn();
    const setSelectedItem = jest.fn();

    // Call the fetchData function
    await fetchData(setNews, setSelectedItem);

    // Assert that axios.post was called with the correct URL
    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/news/getNews');

    // Assert that setNews was called with the filtered news
    expect(setNews).toHaveBeenCalledWith([
      { id: 1, title: 'News 1', show: true },
      { id: 3, title: 'News 3', show: true }
    ]);

    // Assert that setSelectedItem was called with the last filtered news item
    expect(setSelectedItem).toHaveBeenCalledWith({ id: 3, title: 'News 3', show: true });
  });

  test('handles error correctly', async () => {
    // Mock the rejected promise from axios
    axios.post.mockRejectedValue('Error');

    // Mock setNews and setSelectedItem functions
    const setNews = jest.fn();
    const setSelectedItem = jest.fn();

    // Call the fetchData function
    await fetchData(setNews, setSelectedItem);

    // Assert that setNews and setSelectedItem were not called
    expect(setNews).not.toHaveBeenCalled();
    expect(setSelectedItem).not.toHaveBeenCalled();
  });
});
