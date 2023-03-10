import { IconButton, Tooltip } from "@mui/material";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_PL } from "material-react-table/locales/pl";
import BlockIcon from "@mui/icons-material/Block";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";
import { User } from "../../types/types";
import { useTranslation } from "react-i18next";

interface UsersListProps {
  onBlock: (user: User) => void;
  onUnblock: (user: User) => void;
}


const UsersList = ({ onBlock, onUnblock }: UsersListProps) => {
  const { t } = useTranslation();

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
      data={[
        {
          id: 1,
          username: "Baran",
          fullname: "Jan Kowalski",
          email: "janKowalski@gmaiil.com",
          ban: true,
        },
        {
          id: 2,
          username: "Baran",
          fullname: "Jan Nowak",
          email: "jannowak@gmaiil.com",
          ban: false,
        },
        {
          id: 1,
          username: "Baran",
          fullname: "Jan Poleś",
          email: "poljan@gmaiil.com",
          ban: true,
        },
        {
          id: 2,
          username: "Baran",
          fullname: "Jan Worek",
          email: "dsadasf@gmaiil.com",
          ban: false,
        },
      ]}
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
