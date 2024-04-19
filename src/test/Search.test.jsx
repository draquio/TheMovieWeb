import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { SearchList } from "../components/Search";
import { MemoryRouter } from "react-router-dom";

describe("Testing SearchList component", () => {

    const searchlist = [
        {
            "id": 12971,
            "title": "Dragon Ball Z",
            "img": "/jB9l4mp0bzBgzE5y4tvBH6AMeMk.jpg",
            "date": "1989-04-26",
            "vote": 8.327,
            "type": "tv",
            "backdrop_path": "/ydf1CeiBLfdxiyNTpskM0802TKl.jpg"
        },
        {
            "id": 188070,
            "title": "Toriko & One Piece & Dragon Ball Z",
            "img": "/1azUShBxKqHUUJf61BIpnJTtAWO.jpg",
            "date": "2013-04-07",
            "vote": 7.472,
            "type": "movie",
            "backdrop_path": "/iCK2cw43Zb4dppHvufJg0RXaVes.jpg"
        },
        {
            "id": 39107,
            "title": "Dragon Ball Z: ¡Fusión!",
            "img": "/jazByuCSWAZ1H1DRFtxiBKmbzJ0.jpg",
            "date": "1995-03-04",
            "vote": 7.5,
            "type": "movie",
            "backdrop_path": "/m3GqDIJo3U1pjcBCbHadFYbrOMX.jpg"
        },
        {
            "id": 39323,
            "title": "Dragon Ball Z: El último combate",
            "img": "/jamUcpRFj8ZHjQrPHieweUKbRBh.jpg",
            "date": "1990-10-17",
            "vote": 7.5,
            "type": "movie",
            "backdrop_path": "/cUPj0zsNmTbczOh8SwlR8CB6DXt.jpg"
        },
        {
            "id": 39108,
            "title": "Dragon Ball Z: El ataque del dragón",
            "img": "/ldTcRH6A2bQ8rd6hGb5C0I4JjIU.jpg",
            "date": "1995-07-15",
            "vote": 7.2,
            "type": "movie",
            "backdrop_path": "/Ktn3lkVHlaLpymvp7cCIPdb65g.jpg"
        },
        {
            "id": 303857,
            "title": "Dragon Ball Z: La resurrección de Freezer",
            "img": "/6QUqAk7quyFIOZoFJmRp14eiorv.jpg",
            "date": "2015-04-18",
            "vote": 6.8,
            "type": "movie",
            "backdrop_path": "/yWZCOzib7BipGjYJ39nrplb1Fy.jpg"
        },
        {
            "id": 126963,
            "title": "Dragon Ball Z: La Batalla de los Dioses",
            "img": "/cIyPFIeSKNTiWU9Zny0c0IVPQRY.jpg",
            "date": "2013-03-30",
            "vote": 6.777,
            "type": "movie",
            "backdrop_path": "/pWNUpRESGnzKqweHCB77JShPZ2i.jpg"
        },
        {
            "id": 34433,
            "title": "Dragon Ball Z: Estalla el duelo",
            "img": "/8IsHoCqr59hxJxnKtYbAD3Lzhi1.jpg",
            "date": "1993-03-06",
            "vote": 7.206,
            "type": "movie",
            "backdrop_path": "/7lLtUDuBqkL3VqPOOlJuVUNPL0d.jpg"
        },
        {
            "id": 39106,
            "title": "Dragon Ball Z: El combate definitivo",
            "img": "/o6lOkvntqqoJ8jItW7VGlorsuaX.jpg",
            "date": "1994-07-09",
            "vote": 5.7,
            "type": "movie",
            "backdrop_path": "/1I8QhrrHKaxGE3e0f2S75kqrxd9.jpg"
        },
        {
            "id": 24752,
            "title": "Dragon Ball Z: Los mejores rivales",
            "img": "/r0GNumFcQu68a0b5IKcs9P6wZtW.jpg",
            "date": "1991-07-20",
            "vote": 7,
            "type": "movie",
            "backdrop_path": "/hph1RMsL4223xyqxfEx3OXodf5E.jpg"
        },
        {
            "id": 44251,
            "title": "Dragon Ball Z: El regreso de Broly",
            "img": "/xrx6niLS6LQlN3B33MC7gZoxVsV.jpg",
            "date": "1994-03-12",
            "vote": 6.7,
            "type": "movie",
            "backdrop_path": "/kbI9M2m45SSwi3t5ztygAlKxUql.jpg"
        },
        {
            "id": 39101,
            "title": "Dragon Ball Z: La super batalla",
            "img": "/dMACJjc8VlCIvz9zlkkosXf5VxQ.jpg",
            "date": "1990-06-07",
            "vote": 6.5,
            "type": "movie",
            "backdrop_path": "/s0XaJEApAfgMgKUBy6UfOnNTtwR.jpg"
        },
        {
            "id": 39102,
            "title": "Dragon Ball Z: El super guerrero Son Goku",
            "img": "/yazs994GuaRcPio5F17DLTtQJSY.jpg",
            "date": "1991-03-19",
            "vote": 6.4,
            "type": "movie",
            "backdrop_path": "/cyQK5IzMXDUS8o84HYbSIFQt1Vy.jpg"
        },
        {
            "id": 39105,
            "title": "Dragon Ball Z: Los guerreros de plata",
            "img": "/lUVPOjJvU9BLjYT7h6oC9aA4Jpy.jpg",
            "date": "1993-07-10",
            "vote": 7.072,
            "type": "movie",
            "backdrop_path": "/iChtjY4jZTvYEG0lTSxT5B3nG1l.jpg"
        },
        {
            "id": 28609,
            "title": "Dragon Ball Z: Garlic Junior Inmortal",
            "img": "/tXIsWYr3khU1GlsRbjLcTBFS1xm.jpg",
            "date": "1989-07-15",
            "vote": 6.7,
            "type": "movie",
            "backdrop_path": "/wvneAN9gJSVS3HwnGpEBdv9zOlO.jpg"
        },
        {
            "id": 39324,
            "title": "Dragon Ball Z: Un futuro diferente Gohan y Trunks",
            "img": "/9XLhe1915JSX840oEYkXDKs2q2y.jpg",
            "date": "1993-02-24",
            "vote": 7.5,
            "type": "movie",
            "backdrop_path": "/8GvOQSjztqy3M2Oe9KzeSsxFYcO.jpg"
        },
        {
            "id": 39100,
            "title": "Dragon Ball Z: El más fuerte del mundo",
            "img": "/8XfPcbxV545a0KHuCVZQtP3EUra.jpg",
            "date": "1990-03-10",
            "vote": 6.5,
            "type": "movie",
            "backdrop_path": "/xVHgLL32VHlPMl1syvVMuZFSVLM.jpg"
        },
        {
            "id": 39104,
            "title": "Dragon Ball Z: Los tres grandes Super Saiyans",
            "img": "/29Ny7gjn8hZFUfb2vwfBEHSWGmw.jpg",
            "date": "1992-07-11",
            "vote": 6.8,
            "type": "movie",
            "backdrop_path": "/mGr18hk6oDQyGjaSpbF7o5epoJV.jpg"
        },
        {
            "id": 39103,
            "title": "Dragon Ball Z: Guerreros de fuerza ilimitada",
            "img": "/a8uGQUIj51UILeImTvRCtwI6HWF.jpg",
            "date": "1992-03-07",
            "vote": 6.508,
            "type": "movie",
            "backdrop_path": "/l1H7adqYhxBrBK45aKAzqm6nIVC.jpg"
        },
        {
            "id": 299963,
            "title": "Dragon Ball Z: ¡Reuniros! El mundo de Goku",
            "img": "/aKr5GFLLAGy4ndo1NKkIngx1teJ.jpg",
            "date": "1992-09-17",
            "vote": 7.1,
            "type": "movie",
            "backdrop_path": "/cyL9OsDazviewaDbXtJJBynrRTw.jpg"
        }
    ]
  test("it should render a list of search in SearchList component", async () => {
    render(
      <MemoryRouter initialEntries={["/search/dragon+ball+z"]}>
        <SearchList query={"dragon ball z"} searchlist={searchlist} />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = screen.getByRole("heading", {
        name: "Búsqueda: dragon ball z",
        level: 2,
      });
      const imgs = screen.getAllByRole("img", {name: "result_item"});
      expect(imgs.length).toBeGreaterThanOrEqual(1);
      expect(title).toBeInTheDocument();
    });
  });
});
