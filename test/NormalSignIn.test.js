// Import the function to test
const handleSubmit = require('../src/Components/Pages/AuthPages/NormalSignIn');

// Mock the dependencies (e.g., dispatch, navigate)
const dispatch = jest.fn();
const navigate = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => dispatch,
}));
jest.mock('react-router-dom', () => ({
  navigate,
}));

describe('handleSubmit function', () => {
  beforeEach(() => {
    // Clear mock function calls before each test
    jest.clearAllMocks();
  });

  test('submits form data and dispatches success action', async () => {
    // Mock formdata
    const formdata = {
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock fetch response
    const mockResponse = {
      success: true,
      // Add other response data as needed
    };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    // Call the handleSubmit function
    await handleSubmit({ preventDefault: jest.fn() }, formdata);

    // Assert that dispatch was called with the expected action
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGN_IN_START',
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGN_IN_SUCCESS',
      payload: mockResponse,
    });
    expect(navigate).toHaveBeenCalledWith('/');
  });

  test('handles unsuccessful login', async () => {
    // Mock formdata
    const formdata = {
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock fetch response
    const mockResponse = {
      success: false,
      message: 'Invalid credentials',
      // Add other response data as needed
    };
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    // Call the handleSubmit function
    await handleSubmit({ preventDefault: jest.fn() }, formdata);

    // Assert that dispatch was called with the expected action
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGN_IN_START',
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGN_IN_FAILURE',
      payload: 'Invalid credentials',
    });
  });

  test('handles fetch error', async () => {
    // Mock formdata
    const formdata = {
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock fetch error
    const errorMessage = 'Network error';
    global.fetch = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

    // Call the handleSubmit function
    await handleSubmit({ preventDefault: jest.fn() }, formdata);

    // Assert that dispatch was called with the expected action
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGN_IN_START',
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SIGN_IN_FAILURE',
      payload: errorMessage,
    });
  });

  // Add more test cases as needed
});
