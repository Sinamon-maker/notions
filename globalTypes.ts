export enum IconsNames {
  FOLDER_OUTLINED = 'folder-outline',
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
  CHECK = 'check',
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

export type Folder = {
  name: string;
  id: string;
  userId: string;
  createdAt: number;
};

export enum SortParam {
  all = 'All',
  done = 'Done',
  ongoing = 'Ongoing',
}

export interface Data {
  title: string;
  id: string;
  createdAt: number;
  userId: string;
  tasks: Array<Task>;
  displayName: string;
  folder: string;
}
