import { SetStateAction, Dispatch } from "react";

export interface IContextProps {
  children: React.ReactNode;
}

export type IProfileDataObject = {
  id: string;
  alt_description: string;
  url: string;
  authorsName: string;
  views: number;
  downloads: number;
};
export interface IUserContextInterface {
  userSavedImg: IProfileDataObject[];
  setUserSavedImg: Dispatch<SetStateAction<IProfileDataObject[]>>;
}

export interface ISearchContextInterface {
  userSearchQuery: string;
  setUserSearchQuery: Dispatch<SetStateAction<string>>;
  images: any;
  setImages: Dispatch<SetStateAction<any>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface IRenderItem {
  item: any;
}

export interface IModalImgInfo {
  item: any;
}
