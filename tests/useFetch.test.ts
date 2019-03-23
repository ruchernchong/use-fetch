import { cleanup, renderHook } from 'react-hooks-testing-library';
import useFetch from '../src/useFetch';

describe('useFetch', () => {
  afterEach(cleanup);

  // TODO Work on the tests
  test('should fetch data', async () => {
    // const { result, waitForNextUpdate } = renderHook(() =>
    //   useFetch('http://jsonplaceholder.typicode.com/todos/1')
    // );
    //
    // expect(result.current.isLoading).toBe(true);
    //
    // await waitForNextUpdate();
    //
    // expect(result.current.isLoading).toBe(false);
  });
});
