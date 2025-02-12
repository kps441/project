import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  InputAdornment,
  Fade,
  Container,
} from "@mui/material";
import { Lock, Person } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "123456") {
      navigate("/dashboard");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensure full screen height
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        width:"100%",
        padding: 2,
      }}
    >
      <Fade in={true} timeout={1000}>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // Ensures the container takes full height
          }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              background: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              padding: 3,
              width: "100%", // Ensures card takes full width within container
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                {/* Logo or Branding */}
                <img
                  src="https://via.placeholder.com/80"
                  alt="Logo"
                  style={{ width: 80, height: 80, borderRadius: "50%" }}
                />
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
                  Welcome Back
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", textAlign: "center" }}>
                  Please sign in to continue
                </Typography>

                {/* Username Field */}
                <TextField
                  fullWidth
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person sx={{ color: "#6a11cb" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                  required
                />

                {/* Password Field */}
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "#6a11cb" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                  required
                  error={password.length > 0 && password.length < 6}
                  helperText={
                    password.length > 0 && password.length < 6
                      ? "Password must be at least 6 characters"
                      : ""
                  }
                />

                {/* Login Button */}
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    color: "#fff",
                    fontWeight: "bold",
                    py: 1.5,
                    "&:hover": {
                      background: "linear-gradient(135deg, #2575fc, #6a11cb)",
                    },
                  }}
                >
                  Login
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Fade>
    </Box>
  );
};

export default Login;
