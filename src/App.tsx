import * as React from 'react';
import './App.css';

import { DragDropContext } from 'react-beautiful-dnd';
import { EncounterColumn } from './encounter-column/encounter-column';

class App extends React.Component {
  public onDragEnd = () => {

  }

  public render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <EncounterColumn />
      </DragDropContext>
    );
  }
}

export default App;
