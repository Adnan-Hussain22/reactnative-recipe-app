export interface IDiscoverListItem {
  title: string;
  image: string;
  subTitle?: string;
}

export interface IDiscoverList {
  index: number;
  title: string;
  horizontal: boolean;
  type: 0 | 1;
  data: IDiscoverListItem[];
}
