import { render } from "@testing-library/react";
import { NewsItem } from "@/types/news";
import { NewsGrid } from "@/components/NewsGrid";
import { MemoryRouter } from "react-router-dom";

const mockNewsItems: NewsItem[] = [
  {
    source: { id: null, name: "Test Source 1" },
    author: "Test Author 1",
    title: "Test Title 1",
    description: "Test Description 1",
    url: "https://test1.com",
    urlToImage: "https://test1.com/image.jpg",
    publishedAt: "2024-11-12T04:18:26Z",
    content: "Test Content 1",
  },
  {
    source: { id: null, name: "Test Source 2" },
    author: "Test Author 2",
    title: "Test Title 2",
    description: "Test Description 2",
    url: "https://test2.com",
    urlToImage: "https://test2.com/image.jpg",
    publishedAt: "2024-11-13T04:18:26Z",
    content: "Test Content 2",
  },
];

describe("NewsGrid Component", () => {
  it("renders the news grid with news items", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NewsGrid data={mockNewsItems} />
      </MemoryRouter>
    );

    expect(getByTestId("title_0").textContent).toBe("Test Title 1");
    expect(getByTestId("title_1").textContent).toBe("Test Title 2");

    expect(getByTestId("author_0").textContent).toBe("Test Author 1");
    expect(getByTestId("author_1").textContent).toBe("Test Author 2");
  });
});
