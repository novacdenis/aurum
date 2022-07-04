import { FeedbackForm, Navigation } from "components";
import React from "react";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="main-layout">
      <Navigation />
      {children}
      <FeedbackForm />
    </main>
  );
};
