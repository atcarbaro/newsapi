import React, { useEffect, useState } from "react";
import { Container, CircularProgress, Box } from "@mui/material";
import { NewsGrid } from "@/components/NewsGrid";
import { SearchBox } from "@/components/SearchBox";
import { useGetNewsList } from "@/api/query";
import { NewsItem } from "@/types/news";

function Home() {
  const { data: newsData = { articles: [] }, isFetching } = useGetNewsList();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNewsItems, setFilteredNewsItems] = useState<NewsItem[]>();

  useEffect(() => {
    setFilteredNewsItems(newsData.articles);
  }, [newsData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredNewsItems(
      newsData.articles.filter((news) =>
        news.title.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <SearchBox
        placeholder="Search..."
        onChange={handleSearchChange}
        value={searchTerm}
      />

      {isFetching ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <NewsGrid data={filteredNewsItems} />
      )}
    </Container>
  );
}

export default Home;
