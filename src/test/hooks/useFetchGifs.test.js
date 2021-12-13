import { renderHook } from '@testing-library/react-hooks';

// Hook
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Unit test on useFetchGifs (custom hook)', () => {
    test('should return initial state', async () => {
        //Mock the state of the hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Miami'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        // Assert
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an array of images and loading property must be false', async () => {
        // Mock the state of the hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Miami'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        // Assert
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
