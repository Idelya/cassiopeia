import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import UsersList from "./UsersList";
import { User } from "../../types/types";
import BlockUserModal from "./BlockUserModal";
import { useTranslation } from "react-i18next";
import axios from "axios";

const BanUserSection = () => {
  const { t } = useTranslation();
  
  const [blockedUser, setBlockedUser] = useState<null | User>(null);
  const onUnblockUser = async (user: User) => {
    await axios.post("http://localhost:5084/api/user/unban", { userid: user.id });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <Typography variant="h3" component="h1" sx={{ color: "primary" }}>
          {t("admin.title")}
        </Typography>
      </Box>
      <UsersList onBlock={setBlockedUser} onUnblock={onUnblockUser} />
      <BlockUserModal
        open={!!blockedUser}
        blockedUser={blockedUser}
        onClose={() => setBlockedUser(null)}
      />
    </Box>
  );
};

export default BanUserSection;
