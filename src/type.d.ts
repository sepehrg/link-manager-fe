interface IUrl {
  id: number;
  title: string;
  url: string;
}

type UrlState = {
  urls: IUrl[];
};

type AddUrlAction = {
  type: string;
  url: IUrl;
};

type SetUrlsAction = {
  type: string;
  urls: IUrl[];
};

type DispatchType = (args: UrlAction) => UrlAction;

type UrlAction = {
  type: string;
  data: any;
};
