
import "./jopCard.css";


  const jobCard=(props)=> {
    return (
    <div className="jop-card">
        <div className="jop-top">
            <img src={props.image} alt="jop-card"/>
        </div>
        
        <div className="jop-info">
           
        <h4 className="title">{props.name}</h4> 
       <p className="info">{props.description} </p>
       <button onClick={()=>{props.Apply(props.id);}}> Apply</button>
        </div>
     
    </div>
);
}
export default jobCard;