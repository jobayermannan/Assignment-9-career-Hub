import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsPage = () => {
  const assignmentData = [
    { assignment: 'Assignment 1', marks: 55 },
    { assignment: 'Assignment 2', marks: 50 },
    { assignment: 'Assignment 3', marks: 47 },
    { assignment: 'Assignment 4', marks:57 },
    { assignment: 'Assignment 5', marks: 22},
    { assignment: 'Assignment 6', marks: 18},
    { assignment: 'Assignment 7', marks: 60},
    { assignment: 'Assignment 8', marks: 40},
    // Add more data as needed
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#AF19FF','#AF18FG','#88C45F']; // Define colors for the pie slices

  const CustomTooltip = ({ active, payload,  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div className="custom-tooltip">
          <p >{data.assignment}</p>
          <p >Marks: {data.marks}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={assignmentData}
            dataKey="marks"
            nameKey="assignment"
            cx="50%"
            cy="50%"
            outerRadius={160}
            fill="#8884d8"
            labelLine={false}
            label={(entry) => entry.assignment}
          >
            {assignmentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsPage;
