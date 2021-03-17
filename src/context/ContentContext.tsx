import { createContext, ReactNode, useState } from "react";

interface ContentContextData {
  selectedGenreId: number;
  changeGenre: (id: number) => void;
}

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentContext = createContext({} as ContentContextData);

export function ContentProvider({children}: ContentProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function changeGenre(id: number){
    setSelectedGenreId(id);
  }

  return(
    <ContentContext.Provider value={{
      selectedGenreId,
      changeGenre,
    }}>
      {children}
    </ContentContext.Provider>
  );
}