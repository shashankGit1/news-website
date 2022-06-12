import React, { useEffect } from "react";

const Stories = () => { 
    let api = "https://hn.algolia.com/api/v1/search?query=html"
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchApiData(api);
    }, []);
  return <div>
    Stories
  </div>;
};

export default Stories;
