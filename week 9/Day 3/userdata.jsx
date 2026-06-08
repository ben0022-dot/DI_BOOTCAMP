import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, clearUser } from './userSlice';

export default function UserData() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <h2>User Data</h2>

      <button onClick={() => dispatch(fetchUserData())}>Reload</button>
      <button onClick={() => dispatch(clearUser())}>Clear</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Username: {data.username}</p>
        </div>
      )}
    </div>
  );
}