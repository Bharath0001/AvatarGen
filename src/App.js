import './App.css';
import Avatar from './Avatar';

import {useState} from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

 let var = "changed";
function App() {
  const [backgroundColor,setbackgroundColor] = useState("");
  const [initials, setInitials] = useState('');
  const [name, setName] = useState('');
  const [textColor, setTextColor] = useState('');
  const [font,setFont] = useState('');

  const calculateLuminance = (r, g, b) => {
    const a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  };

  const getrandomColor = () =>{
    const r = Math.floor(Math.random()*256); 
    const g = Math.floor(Math.random()*256); 
    const b = Math.floor(Math.random()*256); 
    const fonts = ["fontRoboto","fontBungee","fontrockSalt","fontRighteous","fontlilitaOne","fontfrederickatheGreat","fontOrbitron"];
 
    
    const luminance = calculateLuminance(r,g,b);

    const textColor = luminance < 0.5 ? 'white' : 'black';

    const fontSelector = Math.floor(Math.random()*fonts.length);

    return {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      textColor: textColor,
      font: fonts[fontSelector]
    };
  }
  const generateInitials = (name) => {
    const splitName = name.split(' ');
    const initials = splitName.map(word => word[0]).join('').toUpperCase();
    return initials;
  };
  const handleGenerate = () => {
    const { backgroundColor, textColor,font } = getrandomColor();
    setbackgroundColor(backgroundColor);
    setTextColor(textColor);
    setFont(font);

    const userInitials = generateInitials(name);
    setInitials(userInitials);
  };
  const getClassName = () => {
    let classNames  = [];
    classNames.push(font);
    return combineClass(...classNames);
  };

  const combineClass = (...value) => {
    return value.filter(Boolean).join(" ");
  }
  
  const combinedClasses = combineClass(getClassName(),font);
  return (
    <div className='container'>
      <Avatar className = {combinedClasses} initials={initials} backgroundColor={backgroundColor} textColor={textColor} font={font}/>
      <div className='fontRoboto textField'>
        <TextField 
          label="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <Button variant="contained" className='generateavatarButton' onClick={handleGenerate}>Generate Avatar</Button>
    </div>
  );  
}

export default App;
