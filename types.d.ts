type Asset = {
  ticker: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  currentPrice: number;
};

type Person = {
  id: string;
  country: string;
  sqaureImage: string;
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
