import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const InvSidebarData = [
  {
    name: "Dashboard",
    Icon: DashboardIcon,
    link: "/inventory/dashboard"
  },
  {
    name: "Inventory Management",
    Icon: CategoryIcon,
    items: [
      {
        name: "Item Setup",
        link: "/inventory/item",
        permission: ["view_item", "add_item", "update_item"],
      },
      {
        name: "Item Category Setup",
        link: "/inventory/item-category",
        permission: [
          "view_item_category",
          "add_item_category",
          "update_item_category",
        ],
      },
    ],
  },
];



// export default InvSidebarData;