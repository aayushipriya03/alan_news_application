import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#54436B', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#628395', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#548CA8', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#4C4C6D', title: 'News by Sources', info: ' BBC News, Wired, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },
  ];

const NewsCards = ({articles, activeArticle}) => {
    const classes = useStyles();
    if(!articles.length){
        return (
            <Grow in>
              <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {infoCards.map((infoCard) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                    <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                      <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                      {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                      <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grow>
          );
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{dispaly:'flex'}}>
              <NewsCard article={article} activeArticle={activeArticle} i={i}/>
              </Grid>
               
          
          ))}
          </Grid>
        </Grow>
    )
}

export default NewsCards;
