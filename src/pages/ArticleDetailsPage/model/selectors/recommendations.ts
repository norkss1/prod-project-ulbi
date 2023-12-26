import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.ArticleDetailsPage?.recommendation?.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) => state.ArticleDetailsPage?.recommendation?.error;
