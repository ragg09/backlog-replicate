'use client';
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid, Typography } from '@mui/material';
import Column from './Column';

export default function Board() {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [backlog, setBacklog] = useState([]);
  const [inReview, setInReview] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        const completedTasks = json.filter((task) => task.completed);
        const incompleteTasks = json.filter((task) => !task.completed);

        // Limiting to 10 tasks for each category
        setCompleted(completedTasks.slice(0, 5));
        setIncomplete(incompleteTasks.slice(0, 5));
      });
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    deletePreviousState(source.droppableId, draggableId);

    const task = findItemById(draggableId, [...incomplete, ...completed, ...inReview, ...backlog]);

    setNewState(destination.droppableId, task);
  };

  function deletePreviousState(sourceDroppableId, taskId) {
    switch (sourceDroppableId) {
      case '1':
        setIncomplete(removeItemById(taskId, incomplete));
        break;
      case '2':
        setCompleted(removeItemById(taskId, completed));
        break;
      case '3':
        setInReview(removeItemById(taskId, inReview));
        break;
      case '4':
        setBacklog(removeItemById(taskId, backlog));
        break;
    }
  }

  function setNewState(destinationDroppableId, task) {
    let updatedTask;
    switch (destinationDroppableId) {
      case '1': // TO DO
        updatedTask = { ...task, completed: false };
        setIncomplete([updatedTask, ...incomplete]);
        break;
      case '2': // DONE
        updatedTask = { ...task, completed: true };
        setCompleted([updatedTask, ...completed]);
        break;
      case '3': // IN REVIEW
        updatedTask = { ...task, completed: false };
        setInReview([updatedTask, ...inReview]);
        break;
      case '4': // BACKLOG
        updatedTask = { ...task, completed: false };
        setBacklog([updatedTask, ...backlog]);
        break;
    }
  }

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Column title={'TO DO'} tasks={incomplete} id={'1'} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Column title={'DONE'} tasks={completed} id={'2'} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Column title={'IN REVIEW'} tasks={inReview} id={'3'} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Column title={'BACKLOG'} tasks={backlog} id={'4'} />
        </Grid>
      </Grid>
    </DragDropContext>
  );
}
