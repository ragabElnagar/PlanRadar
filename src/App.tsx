import React from "react";
import { CssBaseline, Container, Typography } from "@mui/material";
import VirtualizedTicketList from "./components/VirtualizedTicketList";
import { tickets } from "./mockData";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Ticket List
        </Typography>
        <VirtualizedTicketList data={tickets} rowHeight={80} viewportHeight={500} />
      </Container>
    </>
  );
};

export default App;
