import React from 'react';

function Reports() {
  return (
    <div>
      <h2>Reports</h2>
      <form>
        <input type="date" placeholder="Start Date" />
        <input type="date" placeholder="End Date" />
        <button type="submit">Get Reports</button>
      </form>
      <div>
        <h3>Quiz Reports</h3>
        {}
        <div>
          <p>Quiz 1</p>
          <p>Score: 80%</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
