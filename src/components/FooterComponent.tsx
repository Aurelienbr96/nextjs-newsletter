import React from "react";
import { Layout } from "antd";

/**
 * Renders the Footer component.
 *
 * @return {ReactElement} The rendered Footer component.
 */
const FooterComponent: React.FC = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    ></Footer>
  );
};

export default FooterComponent;
