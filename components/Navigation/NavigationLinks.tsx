import { ChevronDownIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";
import React from "react";

const NavigationLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation__nav">
      <ul className="navigation__list flex items-center justify-center">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("new_products")}</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("jewelry")}</span>
            <span className="navigation__link-icon">
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("engagement_and_wedding")}</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("for_kids")}</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("watch")}</span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("gifts")}</span>
            <span className="navigation__link-icon">
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__link-text">{t("services")}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
