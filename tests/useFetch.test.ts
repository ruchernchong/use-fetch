import { FetchMock } from 'jest-fetch-mock';
import { cleanup, renderHook } from 'react-hooks-testing-library';
import useFetch from '../src/useFetch';

const fetch = fetchMock as FetchMock;

describe('useFetch', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  afterEach(cleanup);

  test('should fetch data', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 12345 }));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://jsonplaceholder.typicode.com/todos/1'),
    );

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      'http://jsonplaceholder.typicode.com/todos/1',
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toEqual({ data: 12345 });
    expect(result.current.isLoading).toBe(false);
  });
});
