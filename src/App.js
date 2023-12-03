import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");

  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  return (
    <div className="App">
      <h2>{t("Welcome to React")}</h2>
      <br />
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">{t("English")}</option>
        <option value="ua">{t("Ukrainian")}</option>
      </select>
      <button className="reload" onClick={() => window.location.reload()}>
        {t("refresh page")}
      </button>
    </div>
  );
}

export default App;
