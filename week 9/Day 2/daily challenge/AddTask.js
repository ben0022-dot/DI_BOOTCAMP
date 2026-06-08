import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

function AddTask() {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.tasks.selectedDay);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    const task = {
      title: title.trim(),
      description: description.trim(),
      time: time
    };
    
    // STEP 4 & 5: Dispatch addTask action using useDispatch
    dispatch(addTask({ day: selectedDay, task }));
    
    // Reset form
    setTitle('');
    setDescription('');
    setTime('');
    setShowForm(false);
  };

  return (
    <div className="add-task">
      {!showForm ? (
        <button className="add-task-btn" onClick={() => setShowForm(true)}>
          ➕ Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="add-task-form">
          <h3>Add Task for {selectedDay}</h3>
          
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description"
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">Add Task</button>
            <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddTask;