import React, { useState, useEffect } from "react";
import "./App.scss";
import { GithubOutlined } from "@ant-design/icons";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="root">
      <h1>Dark Mode</h1>
      <label className="toggle-label" htmlFor="theme-toggle">
        <input
          className="toggle-input"
          type="checkbox"
          id="theme-toggle"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <span className="toggle-control"></span>
      </label>

      <p>
        Exemplo de implementação de um tema escuro em ReactJS com variáveis de
        SCSS
      </p>
      <p>Daniel Alves 97550 | Ensaio Teórico TDW | MCTW-UA | 2022/2023</p>
      <a
        href="https://github.com/coolalves/tdw-ensaio-teorico"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GithubOutlined />
      </a>
    </div>
  );
};

export default App;
