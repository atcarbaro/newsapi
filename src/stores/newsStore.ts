import { makeAutoObservable } from "mobx";
import { NewsItem } from "@/types/news";
import { makePersistable } from "mobx-persist-store";

class NewsStore {
  newsItems: NewsItem[] = [];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "NewsItems",
      properties: ["newsItems"],
      storage: window.localStorage,
    });
  }

  addNewsItem(newsItem: NewsItem) {
    this.newsItems.push(newsItem);
  }
}

const newsStore = new NewsStore();
export default newsStore;
