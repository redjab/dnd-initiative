import * as React from 'react';
import './App.css';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { EncounterColumn } from './encounter-column/encounter-column';

class App extends React.Component {
  public onDragEnd = (result: DropResult) => {
    console.log(result);
  }

  public render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <EncounterColumn id="1" />
        <EncounterColumn id="2" />
      </DragDropContext>
    );
  }
}

export default App;
