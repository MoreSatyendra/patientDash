import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import "../symptoms/symp.css";

const Symptoms = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Box className="cards">
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 20px 30px rgba(127,255,212, 0.7)",
          }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="card"
        >
          <motion.h2 layout="position">Symptoms</motion.h2>
          {isOpen && (
            <motion.div className="expand">
              <p>
                lorem ipsum tio bJugbeednfbug jnw fusndvsbdjfbjsb vmz
                jfdvhdrbgldbdvvdbsebfie yrtieshsefd0w342 v 3ury0 9q3edojsdd
                9w3r3 fuw9ufhw4yrfbwsa
              </p>
              <button>ADD</button>
            </motion.div>
          )}
        </motion.div>
      </Box>
      <Box className="cards">
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 20px 30px rgba(127,255,212, 0.7)",
          }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="card"
        >
          <motion.h2 layout="position">Symptoms2</motion.h2>
          {isOpen && (
            <motion.div className="expand">
              <p>
                lorem ipsum tio bJugbeednfbug jnw fusndvsbdjfbjsb vmz
                jfdvhdrbgldbdvvdbsebfie yrtieshsefd0w342 v 3ury0 9q3edojsdd
                9w3r3 fuw9ufhw4yrfbwsa
              </p>
              <button>ADD</button>
            </motion.div>
          )}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Symptoms;
