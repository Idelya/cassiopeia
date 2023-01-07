import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import UsersList from "./UsersList";
import { User } from "../../types/types";
import BlockUserModal from "./BlockUserModal";

const BanUserSection = () => {
  const [blockedUser, setBlockedUser] = useState<null | User>(null);
  const onUnblockUser = (user: User) => {
    //TODO: połączyć z backendem
    console.log("odblokowano uzytkownika " + user.fullname);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <Typography variant="h3" component="h1" sx={{ color: "primary" }}>
          Użytkownicy
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
