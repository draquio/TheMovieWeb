import { describe, expect, test, vi } from "vitest";
import {
  PopularMovies,
  TrendingMovie,
  RecommendationMovie,
} from "../components/Movies";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing PopularMovies component", () => {
  test("it should render the PopularMovies component", async () => {
    window.scrollTo = vi.fn();
    render(
      <MemoryRouter initialEntries={["/movies"]}>
        <PopularMovies />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByRole("heading", {
        name: /Películas populares/i,
        level: 2,
      });
      const imgs = screen.getAllByRole("img", { name: "movie_item" });
      expect(imgs).toHaveLength(18);
      expect(title).toBeDefined();
    });
  });
});

describe("Testing TrendingMovies component", () => {
  test("it should render the TrendingMovies component", async () => {
    window.scrollTo = vi.fn();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TrendingMovie />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByRole("heading", {
        name: /Tendencias en Peliculas/i,
        level: 2,
      });
      const imgs = screen.getAllByRole("img", { name: "trending_movie_item" });
      expect(imgs).toHaveLength(12);
      expect(title).toBeDefined();
    });
  });
});

describe("Testing RecommendationMovie component", () => {
  test("it should render the RecommendationMovies component", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RecommendationMovie id={1011985} />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByRole("heading", {
        name: /Te puede interesar/i,
        level: 2,
      });
      const imgs = screen.getAllByRole('img', { name: 'recommendation_movie_item' })
      // expect(imgs).toHaveLength(6);
      expect(imgs.length).toBeGreaterThanOrEqual(2);
      expect(title).toBeDefined();
    });
  });
});
