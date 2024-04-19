import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SingleSerie } from "../components/SingleSerie";
import { MemoryRouter } from "react-router-dom";

describe("Testing SingleMovie component", () => {
    test("it should render Kung Fu Panda 4 movie in SingleMovie component", async () => {
      window.scrollTo = vi.fn();
      render(
        <MemoryRouter initialEntries={["/serie/dragon-ball-z/12971"]}>
          <SingleSerie id={12971} />
        </MemoryRouter>
      );
      await waitFor(() => {
        const title = screen.getByRole("heading", {
          name: "Dragon Ball Z",
          level: 1,
        });
        const img = screen.getByAltText('Dragon Ball Z');
        const director = screen.getByText(/Yoshihiro Ueda/i);
        const trailerbutton = screen.getByRole("button", { name: /Trailers/i})
        const teeaserbutton = screen.getByRole("button", { name: /Teasers/i})
        const seasonbutton = screen.getByRole("button", { name: /Temporadas/i})
        expect(img).toBeInTheDocument();
        expect(director).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(trailerbutton).toBeInTheDocument();
        expect(teeaserbutton).toBeInTheDocument();
        expect(seasonbutton).toBeInTheDocument();
      });
    });
  });