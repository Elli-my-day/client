import theme from '@/styles/theme';

const sizes = {
  small: theme.breakpoints.small,
  medium: theme.breakpoints.medium,
  large: theme.breakpoints.large,
};

const device = {
  mobile: `screen and (max-width: ${sizes.small}px)`,
  tablePortrait: `screen and (min-width: ${sizes.small}px)`,
  tableLandscape: `screen and (min-width: ${sizes.medium}px)`,
  laptop: `screen and (min-width: ${sizes.large}px)`,
};

export default device;
