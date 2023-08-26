import { createContext, useContext, useState, useEffect } from "react";
import { ISearchContextInterface, IContextProps } from "../types";
import { fetchData, fetchSearchQueryData } from "../services/api";

const SearchContext = createContext<ISearchContextInterface>({} as ISearchContextInterface);

const SearchContextProvider = ({ children }: IContextProps) => { 
  const [userSearchQuery, setUserSearchQuery] = useState(''); //параметр поиска пустой или с запросом
  const [images, setImages] = useState<any[]>([]); //данные с нужными картинками
  const [currentPage, setCurrentPage] = useState(1); //состояние прокрутнки страницы

  useEffect(() => {
    if(userSearchQuery == '') {
      fetchData().then(data => setImages([...data]));
    } else {
      fetchSearchQueryData(userSearchQuery).then(data => setImages([...data.results]));
    }
  }, [userSearchQuery]);
  useEffect(() => {
    if(userSearchQuery === '') {
      fetchData().then(data => setImages([...images, ...data]));
    } else if (userSearchQuery !== '') {
      fetchSearchQueryData(userSearchQuery).then(data => setImages([...images, ...data.results]))
    }
  }, [currentPage]);

  const contextValue: ISearchContextInterface = {
    userSearchQuery: userSearchQuery,
    setUserSearchQuery: setUserSearchQuery,
    images: images,
    setImages: setImages,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
  };

  return (
    <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export default SearchContextProvider;