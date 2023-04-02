import React from "react";
import "./Home.css";
import "./jobCard";
 
import {data} from "../../core/data/jop";

const HomePage = () =>{
    <div>hello</div>
    
    const jopData = data;
    const Apply = (id) => {
        console.log('we clicked in video id =', id);
    }
    const displayjop = () => {
        
       
            return jopData.map(
                (item) => {
            
                    return < jopCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        watch={Apply}
                   /> ;
                }
            )
        }
    
    return <div className="home-page">{displayjop()}</div>;
}

   
 
export default HomePage;