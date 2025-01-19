import './main.css';
import './App.css';

function Avatar({initials,backgroundColor,textColor,className}){
  
    return (
        <div>
            <div 
            className="avatarImage"
            style = {{backgroundColor:backgroundColor}}>
                <div 
                className={className }
                style={{color:textColor}}>
                    {initials}
                </div>
            </div>
        </div>
        
    );
};

export default Avatar;