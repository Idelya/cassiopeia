import React from "react";
import Layout from "../../components/layout/Layout";
import BanUserSection from "../../components/Admin/BanUserSection";
import Sidebar from "../../components/layout/Sidebar";
const SellerPage = () => {
  return (
    <Sidebar>
      <BanUserSection />
    </Sidebar>
  );
};

export default SellerPage;
