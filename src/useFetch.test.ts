import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';
import useFetch from './useFetch';

fetchMock.enableMocks();

describe('useFetch', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should fetch data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: 12345 }));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://jsonplaceholder.typicode.com/todos/1')
    );

    await waitForNextUpdate();

    const { data, isLoading } = result.current;

    expect(data).toEqual({ data: 12345 });
    expect(isLoading).toBe(false);
  });
});
