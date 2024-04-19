import { describe, expect, test, vi } from "vitest";
import { PopularSeries, TrendingSerie } from "../components/Series";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Testing PopularSeries component", () => {
  test("it should render the PopularSeries component", async  () => {
    window.scrollTo = vi.fn();
    render(
      <MemoryRouter initialEntries={["/series"]}>
        <PopularSeries />
      </MemoryRouter>
    );
    await waitFor(()=>{
        const title = screen.getByRole('heading', { name: /Series populares/i, level: 2 });
        const imgs = screen.getAllByRole('img', { name: 'serie_item' })
        expect(imgs).toHaveLength(18);
        expect(title).toBeDefined();
    })
  });
});

describe("Testing TrendingSeries component", () => {
  test("it should render the TrendingSeries component", async  () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <TrendingSerie />
      </MemoryRouter>
    );
    await waitFor(()=>{
        const title = screen.getByRole('heading', { name: /Tendencias en Series/i, level: 2 });
        const imgs = screen.getAllByRole('img', { name: 'trending_serie_item' })
        expect(imgs).toHaveLength(12);
        expect(title).toBeDefined();
    })
  });
});