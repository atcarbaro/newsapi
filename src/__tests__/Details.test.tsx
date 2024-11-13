import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import newsStore from "@/stores/newsStore";
import { NewsItem } from "@/types/news";
import Details from "@/pages/Details";

const mockNewsItem: NewsItem = {
  source: { id: null, name: "ESPN" },
  author: "Test Author",
  title: "Tua and the Dolphins keep playoff hopes alive in win vs. Rams - ESPN",
  description: "Test Description",
  url: "https://test.com",
  urlToImage: "https://test.com/image.jpg",
  publishedAt: "2024-11-12T04:18:26Z",
  content: "Test Content",
};

newsStore.newsItems = [mockNewsItem];

describe("Details Component", () => {
  it("renders the news item details", () => {
    const { getByTestId } = render(
      <MemoryRouter
        initialEntries={[
          "/details/tua-and-the-dolphins-keep-playoff-hopes-alive-in-win-vs-rams-espn",
        ]}
      >
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByTestId("details-title")).toBeTruthy();
    expect(getByTestId("details-description")).toBeTruthy();
    expect(getByTestId("details-author")).toBeTruthy();
    expect(getByTestId("details-source")).toBeTruthy();
    expect(getByTestId("details-publishedAt")).toBeTruthy();
  });
});
