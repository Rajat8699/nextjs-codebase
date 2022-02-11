import * as Icons from './icons';
export const getSVGIcon = iconName => {
  if (iconName && iconName in Icons) {
    return Icons[iconName];
  } else {
    return Fragment;
  }
};