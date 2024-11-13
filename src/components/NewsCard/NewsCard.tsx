import React from "react";
import { format } from "date-fns";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { NewsItem } from "@/types/news";
import {
  boxStyles,
  cardContentStyles,
  cardMediaStyles,
  cardStyles,
  cardActionAreaStyles,
  dateBoxStyles,
  dateTypographyStyles,
  titleBoxStyles,
} from "./NewsCard.styles";
import { useNavigate } from "react-router-dom";
import newsStore from "@/stores/newsStore";
import { convertTitleToSlug } from "@/utils/slugify";

const NewsCard: React.FC<NewsItem> = (props) => {
  const { title, publishedAt, author, urlToImage, cardIndex } = props;
  const navigate = useNavigate();

  if (!urlToImage) return null;

  const handleClick = () => {
    newsStore.addNewsItem(props);
    const slug = convertTitleToSlug(title);
    navigate(`/news/${slug}`);
  };

  return (
    <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
      <Card sx={cardStyles}>
        <CardActionArea onClick={handleClick} sx={cardActionAreaStyles}>
          <CardMedia
            data-testid="image"
            sx={cardMediaStyles}
            component="img"
            image={urlToImage || ""}
          />
          <Box sx={boxStyles}>
            <CardContent sx={cardContentStyles}>
              <Box>
                <Typography
                  data-testid={`author_${cardIndex}`}
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {author}
                </Typography>
              </Box>
              <Box sx={titleBoxStyles}>
                <Typography
                  data-testid={`title_${cardIndex}`}
                  component="div"
                  variant="subtitle1"
                  fontWeight={"bold"}
                >
                  {title}
                </Typography>
              </Box>

              <Box sx={dateBoxStyles}>
                <Typography
                  data-testid={`date_${cardIndex}`}
                  variant="body2"
                  component="div"
                  sx={dateTypographyStyles}
                >
                  {format(new Date(publishedAt), "MMM dd, yyyy")}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Grid2>
  );
};

export default NewsCard;
