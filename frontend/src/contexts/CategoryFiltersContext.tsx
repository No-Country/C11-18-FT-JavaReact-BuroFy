"use client";
import React , { createContext, useState , Dispatch , ReactNode} from "react";

type PropsType = {
    children: ReactNode | ReactNode[];
  };
  
interface CategoryFiltersContexts {
    category: string;
    setCategory: Dispatch<React.SetStateAction<string>>;
    handleChangeCategory : any
    selectFilter: any
  }
  
const emptyContext = {};

const CategoryFiltersContext = createContext(emptyContext as CategoryFiltersContexts);

const CategoryFiltersProvider = ({ children } : PropsType) => {
  const [category, setCategory] = useState("All");

  const handleChangeCategory = (e : any) => {
    setCategory(e.target.value);
  };

  const selectFilter = (data : any) => {
    if (category === "All") {
      const dataFilter = data.sort((a : any, b : any) => a.title > b.title ? 1 : -1);
      return dataFilter;
    } else {
      const dataFilter = data.filter((el: { category: string; })  => el.category === category);
      return dataFilter;
    }
  };

  const data = { category, setCategory, handleChangeCategory, selectFilter };

  return (
    <CategoryFiltersContext.Provider value={data}>
      {children}
    </CategoryFiltersContext.Provider>
  );
};

export default CategoryFiltersContext;
export {CategoryFiltersProvider};