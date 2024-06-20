import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function App({ colorMode, setColorMode }) {
  const { toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <Router>
      <Box position="fixed" top="1rem" right="1rem">
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          isRound
          size="lg"
          onClick={handleToggle}
          aria-label="Toggle Dark Mode"
        />
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
