import { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2 className="text-center text-bold text-4xl mt-4 mb-4">Task: 5</h2>
      <p>
        Window width: {width}px
      </p>
    </div>
  );
}

export default WindowWidth;