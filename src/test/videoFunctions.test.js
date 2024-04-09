import { getFilterVideo } from "../utils/videoFunction"

describe("Testing getFilterVideo function", () => {
    const mock = [
        {
            "iso_639_1": "es",
            "iso_3166_1": "ES",
            "name": "Spot ''Cruel World''",
            "key": "v42JZREA5es",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2024-03-06T09:49:32.000Z",
            "id": "65ebc0b7b7d352017be4c4ae"
        },
        {
            "iso_639_1": "es",
            "iso_3166_1": "ES",
            "name": "Todo lo que necesitas saber antes de verla",
            "key": "HTeYCFYSB2M",
            "site": "YouTube",
            "size": 1080,
            "type": "Featurette",
            "official": true,
            "published_at": "2024-02-27T12:58:43.000Z",
            "id": "65ebc0952f1be00187297d20"
        },
        {
            "iso_639_1": "es",
            "iso_3166_1": "ES",
            "name": "Avance exclusivo",
            "key": "VpjCKmUDZe0",
            "site": "YouTube",
            "size": 1080,
            "type": "Clip",
            "official": true,
            "published_at": "2024-02-16T13:50:36.000Z",
            "id": "65d7a9d0798e0601896d46f0"
        },
        {
            "iso_639_1": "es",
            "iso_3166_1": "ES",
            "name": "Tráiler oficial 3 en español",
            "key": "nWzes49-2DA",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": true,
            "published_at": "2023-12-12T17:00:44.000Z",
            "id": "657be116ec8a4300e09bb929"
        }
    ]
    test('it shouldnt return emtpy data', () => {
        const data = getFilterVideo(mock, "Trailer");
        expect(data).not.toHaveLength(0);
    });
    test('it should return empty array if a null input on text is provided', () => {
        const data = getFilterVideo(mock, null);
        expect(data).toEqual([]);
    });
    test('it should return empty array if a null input array is provided', () => {
        const data = getFilterVideo(null, "Trailer");
        expect(data).toEqual([]);
    });
    test('it should return empty array if no one input is provided', () => {
        const data = getFilterVideo();
        expect(data).toEqual([]);
    });
    
})