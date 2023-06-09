import { createContext } from "react";
import React from "react";
import jsonData from '../db.json';
export const DataContext = createContext();
export default function DataContextProvider(props) {
  const [landingPageData, setlandingPageData] = React.useState(null);
 
  React.useEffect(() => {
    setlandingPageData(jsonData);
  }, []);
  
  return (
    <DataContext.Provider value={jsonData?jsonData:null}>
      {props.children}
    </DataContext.Provider>
  );
}
