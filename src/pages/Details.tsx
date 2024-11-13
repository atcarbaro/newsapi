import React from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import newsStore from "@/stores/newsStore";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import { convertTitleToSlug } from "@/utils/slugify";
import { format } from "date-fns";

const Details: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const newsItem = newsStore.newsItems.find(
    (item) => convertTitleToSlug(item.title) === id
  );

  if (!newsItem) {
    return (
      <Box>
        <Typography variant="h6">News item not found</Typography>
      </Box>
    );
  }

  const { title, author, source, publishedAt, urlToImage, description } =
    newsItem;

  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
      <Box sx={{ lg: { px: 4 } }}>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent={"space-between"}
          spacing={2}
        >
          <Typography
            data-testid="details-source"
            fontWeight={"bold"}
            variant="h5"
          >
            {source?.name}
          </Typography>
          <Typography data-testid="details-author" variant="subtitle1">
            {author}
          </Typography>
        </Stack>
        <Box sx={{ mt: 1, mb: 4 }}>
          <Typography data-testid="details-publishedAt" variant="body2">
            {format(new Date(publishedAt), "MMMM do, yyyy, hh:mm a")}
          </Typography>
        </Box>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={urlToImage || ""}
              alt={title}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Typography
              data-testid="details-title"
              fontWeight={"bold"}
              variant="h3"
            >
              {title}
            </Typography>
          </Grid2>
        </Grid2>
        <Box sx={{ py: 2 }}>
          <Typography data-testid="details-description" variant="subtitle1">
            {description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
});
export default Details;
