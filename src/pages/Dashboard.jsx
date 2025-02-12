import React, { useEffect } from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import Card from "../components/Card";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, Legend 
} from "recharts";

// Sample data for charts
const userActivityData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 600 },
  { month: "Apr", users: 800 },
  { month: "May", users: 1200 },
];

const activeUsersData = [
  { month: "Jan", active: 50 },
  { month: "Feb", active: 200 },
  { month: "Mar", active: 350 },
  { month: "Apr", active: 600 },
  { month: "May", active: 900 },
];

const pieData = [
  { name: "Mobile Users", value: 400 },
  { name: "Web Users", value: 600 },
  { name: "Tablet Users", value: 200 },
];

const reviewData = [
  { month: "Jan", reviews: 30 },
  { month: "Feb", reviews: 40 },
  { month: "Mar", reviews: 80 },
  { month: "Apr", reviews: 120 },
  { month: "May", reviews: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dashboard = ({ username }) => {
  useEffect(() => {
    alert(`Hi ${username}, welcome!`);
  }, [username]);

  return (
    <Box
      sx={{
        p: 3,
        px: 8,
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #00c6ff, #0072ff)",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome, {username}
      </Typography>

      {/* Summary Cards */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
        <Card title="Total Users" value="1,234" backgroundColor="#f0f4c3" />
        <Card title="Active Users" value="567" backgroundColor="#c8e6c9" />
        <Card title="New Signups" value="200" backgroundColor="#ffccbc" />
        <Card title="Returning Users" value="430" backgroundColor="#b3e5fc" />
      </Box>

      {/* Graphs Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly User Growth
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userActivityData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#6a11cb" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>
              Active Users Trend
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activeUsersData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="active" stroke="#ff5722" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly User Reviews
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reviewData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="reviews" fill="#ffbb28" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
