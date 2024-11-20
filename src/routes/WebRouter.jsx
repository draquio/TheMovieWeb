import { Routes, Route } from "react-router-dom";
import { Home, Movies, Series, Search, SinglePage } from "../pages";
import { Layout } from "../layout";
import { GenrePage } from "../pages/genre/GenrePage";

export function WebRouter() {
  const loadLayaout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayaout(Layout, Home)} />
      <Route path="/movies" element={loadLayaout(Layout, Movies)} />
      <Route path="/series" element={loadLayaout(Layout, Series)} />
      <Route path="/genre/:type/:name/:id" element={loadLayaout(Layout, GenrePage)} />
      <Route path="/search/:query" element={loadLayaout(Layout, Search)} />
      <Route path="/:type/:path/:id" element={loadLayaout(Layout, SinglePage)} />
    </Routes>
  );
}
