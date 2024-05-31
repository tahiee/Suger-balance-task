import React, { useState, useEffect } from "react";
import RouterConfig from "../router/RouterConfig";
import LoadingAnimation from "../Component/LoadingAni";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set loading to false after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation/> // Render loading animation while isLoading is true
      ) : (
        <RouterConfig /> // Render RouterConfig when isLoading is false
      )}
    </>
  );
};

export default App;
