import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("type.welcome"),
          t("type.fullstack"),
          t("type.software_eng"),
          t("type.problem_solver"),
          t("type.passionate"),
          t("type.learning"),
          t("type.testing"),
          t("type.collaborative"),
          t("type.communication"),
          t("type.adaptable"),
          t("type.work_ethic"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
