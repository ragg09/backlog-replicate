'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface Quote {
  id: string;
  content: string;
}

const initial: Quote[] = Array.from({ length: 10 }, (_, index) => ({
  id: `id-${index}`,
  content: `Quote ${index}`,
}));

const grid = 8;
const reorder = (list: Quote[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
  border: 1px solid black;
`;

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

const Quote: React.FC<{ quote: Quote; index: number }> = ({ quote, index }) => (
  <Draggable draggableId={quote.id} index={index}>
    {(provided) => (
      <QuoteItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {quote.content}
      </QuoteItem>
    )}
  </Draggable>
);

const Home: React.FC = () => {
  const [state, setState] = useState<{ quotes: Quote[] }>({ quotes: initial });

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const sourceColumnId = result.source.droppableId;
    const destinationColumnId = result.destination.droppableId;
    const updatedQuotes = Array.from(state.quotes);

    // Moving within the same column
    if (sourceColumnId === destinationColumnId) {
      const reorderedQuotes = reorder(updatedQuotes, sourceIndex, destinationIndex);
      setState({ quotes: reorderedQuotes });
    } else {
      // Moving between columns
      const [removedQuote] = updatedQuotes.splice(sourceIndex, 1);
      updatedQuotes.splice(destinationIndex, 0, removedQuote);
      setState({ quotes: updatedQuotes });
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Column>
          <Droppable droppableId="left">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {state.quotes.map((quote, index) => (
                  <Quote key={quote.id} quote={quote} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Column>
        <Column>
          <Droppable droppableId="right">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {/* Render right column here */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Column>
      </Container>
    </DragDropContext>
  );
};

export default Home;
