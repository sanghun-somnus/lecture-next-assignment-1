type Asset = {
  ticker: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  currentPrice: number;
};

type Person = {
  id: string;
  name: string;
  country: string;
  squareImage: string;
  bio: string[];
  netWorth: number;
  financialAssets: Asset[];
};

type Billionary = {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
};

type PersonSearchParams = {
  name: string;
};
type PersonParams = {
  id: string;
};
