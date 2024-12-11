export const generateTickets = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      subject: `Ticket #${index + 1}`,
      priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
      status: ["Open", "In Progress", "Closed"][Math.floor(Math.random() * 3)],
      description: `Description for ticket #${index + 1}`,
    }));
  };
  
  export const tickets = generateTickets(10000);
  