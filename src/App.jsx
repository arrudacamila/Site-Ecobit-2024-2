import React from "react";
import AppRoutes from "./Routes";
import { RecoilRoot } from "recoil"; // Importe RecoilRoot

function App() {
  return (
    <RecoilRoot> {/* Envolve o componente AppRoutes com o RecoilRoot */}
      <div className="app">
        <AppRoutes />
      </div>
    </RecoilRoot>
  );
}

export default App;
