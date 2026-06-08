import React from 'react';
import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

function TaskList() {
  const selectedDay = useSelector(state => state.tasks.selectedDay);
  const tasks = useSelector(state => state.tasks.tasks[selectedDay] || []);

  return (
    <div className="task-list">
      <h3>Tasks for {selectedDay}</h3>
      
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks for this day. Add one!</p>
      ) : (
        <div className="tasks-container">
          {tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    // Toggle completed status
                    const editTask = window.dispatchEvent.bind(window, new CustomEvent('toggle-task', {
                      detail: { day: selectedDay, taskId: task.id }
                    }));
                  }}
                  className="task-checkbox"
                />
                <div className="task-info">
                  <h4 className="task-title">{task.title}</h4>
                  {task.description && <p className="task-description">{task.description}</p>}
                  {task.time && <p className="task-time">🕐 {task.time}</p>}
                </div>
              </div>
              
              <div className="task-actions">
                <EditTask taskId={task.id} day={selectedDay} />
                <DeleteTask taskId={task.id} day={selectedDay} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;