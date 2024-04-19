import { describe, expect, test } from "vitest";
import {
  formatAllMovie,
  formatSearch,
  createPath,
} from "../utils/moviesFunction";
const mock = [
  {
    adult: false,
    backdrop_path: "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
    genre_ids: [28, 878, 12],
    id: 823464,
    original_language: "en",
    original_title: "Godzilla x Kong: The New Empire",
    overview:
      "Una aventura cinematográfica completamente nueva, que enfrentará al todopoderoso Kong y al temible Godzilla contra una colosal amenaza desconocida escondida dentro de nuestro mundo. La nueva y épica película profundizará en las historias de estos titanes, sus orígenes y los misterios de Isla Calavera y más allá, mientras descubre la batalla mítica que ayudó a forjar a estos seres extraordinarios y los unió a la humanidad para siempre.",
    popularity: 3673.963,
    poster_path: "/iLa15KURiosRmvtWP6vKqBT11Le.jpg",
    release_date: "2024-03-27",
    title: "Godzilla y Kong: El nuevo imperio",
    video: false,
    vote_average: 6.699,
    vote_count: 402,
  },
  {
    adult: false,
    backdrop_path: "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
    genre_ids: [28, 12, 16, 35, 10751],
    id: 1011985,
    original_language: "en",
    original_title: "Kung Fu Panda 4",
    overview:
      'Po se prepara para ser el líder espiritual del Valle de la Paz, buscando un sucesor como Guerrero Dragón. Mientras entrena a un nuevo practicante de kung fu, enfrenta al villano llamado "el Camaleón", que evoca villanos del pasado, desafiando todo lo que Po y sus amigos han aprendido.',
    popularity: 2222.533,
    poster_path: "/zS8BSQdbOesql0EWbs17kPvLoAT.jpg",
    release_date: "2024-03-02",
    title: "Kung Fu Panda 4",
    video: false,
    vote_average: 6.769,
    vote_count: 593,
  },
];
const data = formatAllMovie(mock);

describe("Testing formatAllMovie function", () => {
  test("It shouldnt return empty", () => {
    expect(data).not.toHaveLength(0);
  });

  test("Every element should has the correct properties", () => {
    data.forEach((movie) => {
      expect(movie).toHaveProperty("id");
      expect(movie).toHaveProperty("title");
      expect(movie).toHaveProperty("img");
      expect(movie).toHaveProperty("date");
      expect(movie).toHaveProperty("vote");
      expect(movie).toHaveProperty("backdrop_path");
    });
  });

  test("It should return an empty array", () => {
    const emptydata = formatAllMovie([]);
    expect(emptydata).toEqual([]);
  });

  test("It should return an empty array if the data es empty", () => {
    const emptydata = formatAllMovie([]);
    expect(emptydata).toEqual([]);
  });
  test("It should return an empty array if the data is null", () => {
    const nulldata = formatAllMovie(null);
    expect(nulldata).toEqual([]);
  });
  test("It should return an empty array if we dont send a data", () => {
    const undefineddata = formatAllMovie();
    expect(undefineddata).toEqual([]);
  });
});

const mockResultSearch = [
  {
    adult: false,
    backdrop_path: "/1qCGrhbbBLZpPY1NhyDjGymwq0X.jpg",
    id: 99588,
    name: "Kampamento Koral: Bob Esponja primeras aventuras",
    original_language: "en",
    original_name: "Kamp Koral: SpongeBob's Under Years",
    overview:
      'Bob Esponja tiene 10 años y junto con sus amigos Patricio y Arenita pasan tiempo en un campamento de verano dirigido por el señor Cangrejo llamado "Kampamento Koral".',
    poster_path: "/peZYB3aFOBoZbpFhOZogrTHVlqX.jpg",
    media_type: "tv",
    genre_ids: [16, 35, 10751],
    popularity: 372.289,
    first_air_date: "2021-03-04",
    vote_average: 7.2,
    vote_count: 496,
    origin_country: ["US"],
  },
  {
    adult: false,
    backdrop_path: "/i2fZIltljrhFPsUK9PN6O6ZE7M4.jpg",
    id: 11836,
    title: "Bob Esponja: La película",
    original_language: "en",
    original_title: "The SpongeBob SquarePants Movie",
    overview:
      "Hay problemas en Bikini Bottom: la corona del Rey Neptuno ha desaparecido y las sospechas recaen en el Sr. Krabs. Junto a Patrick, su mejor amigo, Bob Esponja marcha a la peligrosa Ciudad de Shell para rescatar la corona de Neptuno y salvar al Sr. Krabs.",
    poster_path: "/CtISczftMz6g7kyk5uLxBben8b.jpg",
    media_type: "movie",
    genre_ids: [10751, 16, 35, 14, 12],
    popularity: 60.983,
    release_date: "2004-11-14",
    video: false,
    vote_average: 7.009,
    vote_count: 2741,
  },
];
const resultSearchData = formatSearch(mockResultSearch);
describe("Testing formatSearch function", () => {
  test("It shouldnt return empty", () => {
    expect(resultSearchData).not.toHaveLength(0);
  });

  test("Every element should has the correct properties", () => {
    resultSearchData.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("img");
      expect(item).toHaveProperty("date");
      expect(item).toHaveProperty("vote");
      expect(item).toHaveProperty("type");
      expect(item).toHaveProperty("backdrop_path");
    });
  });

  test("It should return an empty array", () => {
    const emptydata = formatSearch([]);
    expect(emptydata).toEqual([]);
  });
  test("It should return an empty array if the data es empty", () => {
    const emptydata = formatSearch([]);
    expect(emptydata).toEqual([]);
  });
  test("It should return an empty array if the data is null", () => {
    const nulldata = formatSearch(null);
    expect(nulldata).toEqual([]);
  });
  test("It should return an empty array if we dont send a data", () => {
    const undefineddata = formatSearch();
    expect(undefineddata).toEqual([]);
  });
});

describe("Testing createPath function", () => {
  test("It should return the path", () => {
    const data = createPath("Godzilla y Kong: El nuevo imperio");
    expect(data).toEqual("godzilla-y-kong-el-nuevo-imperio");
  });

  test("It should return empty text if we send nothing", () => {
    const data = createPath();
    expect(data).toBe("");
  });
  test("It should return empty text if we send empty text", () => {
    const data = createPath("");
    expect(data).toBe("");
  });
  test("It should return empty text if we send null", () => {
    const data = createPath(null);
    expect(data).toBe("");
  });
});
