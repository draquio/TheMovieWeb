import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SingleMovie } from "../components/SingleMovie/SingleMovie";
import { MemoryRouter } from "react-router-dom";

describe("Testing SingleMovie component", () => {
  test("it should render Kung Fu Panda 4 movie in SingleMovie component", async () => {
    window.scrollTo = vi.fn();
    render(
      <MemoryRouter initialEntries={["/movie/kung-fu-panda-4/1011985"]}>
        <SingleMovie id={1011985} />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByRole("heading", {
        name: "Kung Fu Panda 4",
        level: 1,
      });
      const img = screen.getByAltText("Kung Fu Panda 4");
      const director = screen.getByText("Mike Mitchell");
      const trailerbutton = screen.getByRole("button", { name: /Trailers/i });
      const teeaserbutton = screen.getByRole("button", { name: /Teasers/i });
      expect(img).toBeInTheDocument();
      expect(director).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(trailerbutton).toBeInTheDocument();
      expect(teeaserbutton).toBeInTheDocument();
    });
  });
});
