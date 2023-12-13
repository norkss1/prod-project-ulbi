import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.ArticleDetailsPage?.comments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) => state.ArticleDetailsPage?.comments?.error;
