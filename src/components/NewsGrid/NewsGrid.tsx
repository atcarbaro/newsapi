import Grid2 from "@mui/material/Grid2";
import { NewsCard } from "@/components/NewsCard";
import { NewsGridProps } from "@/types/news";

const NewsGrid: React.FC<NewsGridProps> = (props) => {
  const { data: newsItems } = props;
  console.log("newsItems", newsItems);

  return (
    <Grid2 container spacing={3}>
      {newsItems &&
        newsItems.map((news, index) => (
          <NewsCard
            title={news.title}
            description={news.description}
            source={news.source}
            author={news.author}
            url={undefined}
            urlToImage={news.urlToImage}
            publishedAt={news.publishedAt}
            content={null}
            key={index}
            cardIndex={index}
          />
        ))}
    </Grid2>
  );
};

export default NewsGrid;
