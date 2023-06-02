import { AuthContextProvider } from './contexts/AuthContext';
import Router from './Router';
import "./styles.css"

function App() {
  return (

    <AuthContextProvider>
      <div className="App">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;





/* < h1>Itens</h1>
      <Grid container spacing={8} direction="column" className='containerItem'>
        {(() => {
          let gridItems = [];

          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '1083ccb547msh955815bb309e8d9p11100bjsndab26f370382',
              'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
            }
          };
          
          fetch('https://local-business-data.p.rapidapi.com/search-in-area?query=pizza&lat=37.359428&lng=-121.925337&zoom=13&limit=20&language=en&region=us', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

          for (let i = 1; i <= 10; i++) {
            gridItems.push(
              <Grid item>
                Item 2


              </Grid>
            );
          }
          return gridItems;
        })()}
        <Grid item>
          Item 2
        </Grid>
        <Grid item>
          Item 3
        </Grid>
        <Grid item>
          Item 4
        </Grid>
      </Grid>*/