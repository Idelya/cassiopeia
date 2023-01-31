import { IconButton, Tooltip } from "@mui/material";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_PL } from "material-react-table/locales/pl";
import BlockIcon from "@mui/icons-material/Block";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React, { useState } from "react";
import { User } from "../../types/types";
import { useTranslation } from "react-i18next";
import axios from "axios";

interface UsersListProps {
  onBlock: (user: User) => void;
  onUnblock: (user: User) => void;
}


const UsersList = ({ onBlock, onUnblock }: UsersListProps) => {
  const { t } = useTranslation();

  const [users, setUsers] = useState<User[]>([]);
  axios.get("http://localhost:5084/api/user/users", { headers: { userToken: sessionStorage.getItem("token")} })
        .then((response) => {if(String(response.data) !== String(users)) { setUsers(response.data); }})

  return (
    <MaterialReactTable
      columns={[
        { header: t("admin.userList.id"), accessorKey: "id" },
        { header: t("admin.userList.username"), accessorKey: "username" },
        { header: t("admin.userList.nameAndSurname"), accessorKey: "fullname" },
        {
          header: t("admin.userList.email"),
          accessorKey: "email",
        },
      ]}
      data={users}
      enableColumnActions
      enableColumnFilters
      enableRowActions
      enablePagination
      enableSorting
      enableBottomToolbar
      enableTopToolbar
      muiTableBodyRowProps={{ hover: false }}
      positionActionsColumn="last"
      renderRowActions={({ row }) =>
        row.original.ban ? (
          <Tooltip arrow placement="left" title={ t("admin.userList.unban") }>
            <IconButton color="success" onClick={() => onUnblock(row.original)}>
              <LockOpenIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip arrow placement="left" title={ t("admin.userList.ban") }>
            <IconButton color="error" onClick={() => onBlock(row.original)}>
              <BlockIcon />
            </IconButton>
          </Tooltip>
        )
      }
      localization={MRT_Localization_PL}
    />
  );
};

export default UsersList;
