import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
 import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import alan from './image/alan.jpg';
//import { NewsCards, Modal } from './components';
import useStyles from './styles';

const alanKey = '7e602e62a469c71df6c1a6783af09d4c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App  = () =>{
const [ newsArticles, setNewsArticles]= useState([]);
const [activeArticle, setActiveArticle] = useState(-1);
const classes = useStyles();

useEffect(() => {
  alanBtn({
    key: alanKey,
    onCommand:( {command, articles , number} ) =>{
      if(command === 'newHeadlines'){
        setNewsArticles(articles);
        setActiveArticle(-1);
      }   
      else if(command === 'highlight'){
        setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
      } else if(command === 'open'){
        const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
        const article = articles[parsedNumber - 1];

        if (parsedNumber > articles.length) {
          alanBtn().playText('Please try that again...');
        } else if (article) {
          window.open(article.url, '_blank');
          alanBtn().playText('Opening...');
        } else {
          alanBtn().playText('Please try that again...');
        }
      }
    }
  })
}, [])

  return(
    <div>
     <div className={classes.logoContainer}>
  
        <img src={alan} className={classes.alanLogo} alt="logo" />
        </div>
        <NewsCards articles={newsArticles}  activeArticle={activeArticle}/>
    </div>
  )
}


export default App;
