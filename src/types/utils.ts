// MicroCMSのさ配列の汎用型定義
export type MicroCmsType<T> = {
  contents: T[];
  totatCount: number;
  offset: number;
  limit: number;
};
