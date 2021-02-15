import './App.css';
import SortingVisualiser from './SortingVisualiser/SortingVisualiser';
import {Grid} from '@material-ui/core';

function App() {
  return (
    <Grid
    direction="column"
    style={{ height: '100vh' , width: '1500px'}}>
      <SortingVisualiser>
      </SortingVisualiser>
    </Grid>
  );
}

export default App;
