import React from "react";
import { Provider } from "./context/contextBooks";

import Books from "./components/Books";

const App = () => {
  return (
    <Provider>
      <Books />
    </Provider>
  );
};

export default App;
