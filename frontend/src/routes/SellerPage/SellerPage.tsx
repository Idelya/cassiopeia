import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import MyOffertsSection from "../../components/Selller/MyOffertsSection";
const AdminPage = () => {
  return (
    <Sidebar>
      <MyOffertsSection />
    </Sidebar>
  );
};

export default AdminPage;
