
import { getGifs } from '../../helpers/getGifs';

describe("Test the getGifs helper function", () => {

    test("The request should return 10 items", async () => {
        const gifs = await getGifs('miami');
        expect(gifs.length).toBe(10);
    })

    test("Empty category should not be returned", async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })

})