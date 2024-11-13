import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import newsStore from "@/stores/newsStore";
import { NewsItem } from "@/types/news";
import { NewsCard } from "@/components/NewsCard";

const mockNewsItem: NewsItem = {
  source: { id: null, name: "Test Source" },
  author: "Test Author",
  title: "Test Title",
  description: "Test Description",
  url: "https://test.com",
  urlToImage: "https://test.com/image.jpg",
  publishedAt: "2024-11-12T04:18:26Z",
  content: "Test Content",
  cardIndex: 0,
};

describe("NewsCard Component", () => {
  it("renders the news card", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NewsCard {...mockNewsItem} />
      </MemoryRouter>
    );

    expect(getByTestId("title_0").textContent).toBe("Test Title");
    expect(getByTestId("author_0").textContent).toBe("Test Author");
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

  it("displays the correct date format", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NewsCard {...mockNewsItem} />
      </MemoryRouter>
    );

    expect(getByTestId("date_0").textContent).toBe("Nov 11, 2024");
  });
});
