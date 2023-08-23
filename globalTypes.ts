export enum IconsNames {
  FOLDER = 'folder',
  OPENFOLDER = 'folder-open',
  EDIT = 'pencil-outline',
  CLOSE = 'window-close',
  UNFOLD = 'unfold-more-horizontal',
  DELETE = 'delete-outline',
  ADD = 'plus',
  ADDFOLDER = 'folder-plus-outline',
  SEARCH = 'magnify',
  TASKS = 'view-list-outline',
  EMAIL = 'email-outline',
  LOCK = 'lock-outline',
  ACCOUNT = 'account-outline',
}

export interface IconProps {
  icon: IconsNames;
  size?: number;
  color?: string;
}

export interface Task {
  text: string;
  status: boolean;
  created: number;
  detailes?: string;
}
