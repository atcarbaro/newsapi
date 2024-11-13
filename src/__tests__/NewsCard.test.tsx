import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import newsStore from "@/stores/newsStore";
import { NewsItem } from "@/types/news";
import { NewsCard } from "@/components/NewsCard";

const mockNewsItem: NewsItem = {
  source: { id: null, name: "ESPN" },
  author: "Test Author",
  title: "Tua and the Dolphins keep playoff hopes alive in win vs. Rams - ESPN",
  description: "Test Description",
  url: "https://test.com",
  urlToImage: "https://test.com/image.jpg",
  publishedAt: "2024-11-12T04:18:26Z",
  content: "Test Content",
  cardIndex: 1,
};

describe("NewsCard Component", () => {
  it("renders the news card", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NewsCard {...mockNewsItem} />
      </MemoryRouter>
    );

    expect(getByTestId("title_1")).toBeTruthy();
    expect(getByTestId("author_1")).toBeTruthy();
  });

  it("navigates to the details page on click", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <NewsCard {...mockNewsItem} />
      </MemoryRouter>
    );

    fireEvent.click(getByRole("button"));

    expect(newsStore.newsItems).toContainEqual(mockNewsItem);
  });
});
