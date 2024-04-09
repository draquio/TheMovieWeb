import { formatAllSeries } from "../utils/seriesFunction";

describe("Testing formatAllSeries function", () => {
  const mock = [
    {
      adult: false,
      backdrop_path: "/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg",
      id: 108545,
      name: "El problema de los 3 cuerpos",
      original_language: "en",
      original_name: "3 Body Problem",
      overview:
        "Una decisión tomada en China en los años 60 trasciende el tiempo y el espacio, obligando a unos científicos a afrontar la peor amenaza para la humanidad en el presente.",
      poster_path: "/6Dc9mMl083cVpNknWzALCw7JYPH.jpg",
      media_type: "tv",
      genre_ids: [10765, 9648, 18],
      popularity: 895.074,
      first_air_date: "2024-03-21",
      vote_average: 7.556,
      vote_count: 452,
      origin_country: ["US"],
    },
    {
      adult: false,
      backdrop_path: "/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
      id: 126308,
      name: "Shōgun",
      original_language: "en",
      original_name: "Shōgun",
      overview:
        "Ambientada en el Japón de 1600, lord Yoshii Toranaga lucha por su vida mientras que sus enemigos en el Consejo de regentes se alían contra él cuando un misterioso barco europeo aparece abandonado cerca de un pueblo pesquero.",
      poster_path: "/uIoDvVOQaKjSfz2oihkVS8M7l1v.jpg",
      media_type: "tv",
      genre_ids: [18, 10768],
      popularity: 1606.64,
      first_air_date: "2024-02-27",
      vote_average: 8.7,
      vote_count: 394,
      origin_country: ["US"],
    },
  ];
  const data = formatAllSeries(mock);

  test("It shouldnt return empty", () => {
    expect(data).not.toHaveLength(0);
  });
  test("Every element should has the correct properties", () => {
    data.forEach((serie) => {
      expect(serie).toHaveProperty("id");
      expect(serie).toHaveProperty("title");
      expect(serie).toHaveProperty("img");
      expect(serie).toHaveProperty("date");
      expect(serie).toHaveProperty("vote");
      expect(serie).toHaveProperty("backdrop_path");
    });
  });

  test("It should return an empty array", () => {
    const emptydata = formatAllSeries([]);
    expect(emptydata).toEqual([]);
  });

  test("It should return an empty array if the data is null", () => {
    const nulldata = formatAllSeries(null);
    expect(nulldata).toEqual([]);
  });
  test("It should return an empty array if we dont send a data", () => {
    const undefineddata = formatAllSeries();
    expect(undefineddata).toEqual([]);
  });
  test("It should return an empty array if we send something that is not the data", () => {
    const data = formatAllSeries("asd");
    expect(data).toEqual([]);
  });
});
