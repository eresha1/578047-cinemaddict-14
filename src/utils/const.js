const CardCount = {
  ALL: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2,
};

export const FilmsSection = [
  {
    title: 'All movies. Upcoming',
    type: 'upcoming',
    count: CardCount.ALL,
  },
  {
    title: 'Top rated',
    type: 'extra',
    count: CardCount.TOP_RATED,
  },
  {
    title: 'Most commented',
    type: 'extra',
    count: CardCount.MOST_COMMENTED,
  },
];

export const Filters = [
  {
    title: 'All movies',
    href: 'all',
  },
  {
    title: 'Watchlist',
    href: 'watchlist',
  },
  {
    title: 'History',
    href: 'history',
  },
  {
    title: 'Favorites',
    href: 'favorites',
  },
];

export const SortSection = [
  'Sort by default',
  'Sort by date',
  'Sort by rating',
];
