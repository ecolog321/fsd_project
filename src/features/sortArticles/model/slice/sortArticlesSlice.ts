import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { Article, ArticleType} from "@/entities/Article";
import { ArticleSortFeild, SortArticlesSchema, SortOrder } from "../types/sortArticles";


const articlesAdapter = createEntityAdapter<Article>();

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);


const sortArticlesSlice = createSlice({
  name: "sortArticlesSlice",
  initialState: articlesAdapter.getInitialState<SortArticlesSchema>({
      order: "asc",
      sort: ArticleSortFeild.VIEWS,
      search: "",
      ids: [],
      type:ArticleType.ALL,
      entities: {}
  }),
  reducers: {
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortFeild>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },

  },
 /*  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        }
      );
  }, */
});

export const { reducer: sortArticlesReducers, actions: sortArticlesActions } =
  sortArticlesSlice;
