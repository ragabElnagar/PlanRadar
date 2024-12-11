import React, { useRef, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

interface Ticket {
  id: number;
  subject: string;
  priority: string;
  status: string;
  description: string;
}

interface VirtualizedTicketListProps {
  data: Ticket[];
  rowHeight: number;
  viewportHeight: number;
}

const VirtualizedTicketList = (props: VirtualizedTicketListProps) => {
  const { data, rowHeight, viewportHeight } = props;
  
  const [startIdx, setStartIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalHeight = data.length * rowHeight;
  const visibleRowCount = Math.ceil(viewportHeight / rowHeight);


  const handleScroll = () => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      setStartIdx(Math.floor(scrollTop / rowHeight));
    }
  };

  const visibleRows = data.slice(startIdx, startIdx + visibleRowCount);

  return (
    <Paper
      ref={containerRef}
      onScroll={handleScroll}
      sx={{
        height: `${viewportHeight}px`,
        overflowY: "auto",
        borderRadius: 2,
        border: "1px solid #ddd",
      }}
    >
      <Box sx={{ height: `${totalHeight}px`, position: "relative" }}>
        {visibleRows.map((item, idx) => (
          <Box
            key={item.id}
            sx={{
              position: "absolute",
              top: `${(startIdx + idx) * rowHeight}px`,
              height: `${rowHeight}px`,
              width: "100%",
              display: "flex",
              alignItems: "center",
              padding: 2,
              backgroundColor: item.id % 2 === 0 ? "#f9f9f9" : "#fff",
              borderBottom: "1px solid #eee",
            }}
          >
            <Box flex={1}>
              <Typography variant="h6" color="primary">
                {item.subject}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body1" color="secondary">
                {item.priority}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.status}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default VirtualizedTicketList;
