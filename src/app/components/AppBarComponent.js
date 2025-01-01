import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar variant="dense" className="bg-black">
          <span className="font-extrabold">
            Metric Coders (Created by Suhas Bhairav)
          </span>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
