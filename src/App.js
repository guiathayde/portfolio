import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import sharedDataJs from "./data/portfolio_shared_data";
import primaryLanguageJs from "./data/res_primaryLanguage";
import secondaryLanguageJs from "./data/res_secondaryLanguage";

const App = () => {
  const sharedData = useMemo(() => sharedDataJs[0], []);

  const [resumeData, setResumeData] = useState(primaryLanguageJs[0]);

  const swapCurrentlyActiveLanguage = useCallback((oppositeLangIconId) => {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;

    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");

    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }, []);

  const applyPickedLanguage = useCallback(
    (pickedLanguage, oppositeLangIconId) => {
      swapCurrentlyActiveLanguage(oppositeLangIconId);

      document.documentElement.lang = pickedLanguage;

      document.documentElement.lang === window.$primaryLanguage
        ? setResumeData(primaryLanguageJs[0])
        : setResumeData(secondaryLanguageJs[0]);
    },
    [swapCurrentlyActiveLanguage]
  );

  useEffect(() => {
    document.title = `${sharedData.basic_info.name}`;

    applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }, [applyPickedLanguage, sharedData.basic_info.name]);

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$primaryLanguage,
              window.$secondaryLanguageIconId
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-states"
            data-inline="false"
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(
              window.$secondaryLanguage,
              window.$primaryLanguageIconId
            )
          }
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-brazil"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
};

export default App;
