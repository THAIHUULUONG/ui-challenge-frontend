import { lazy } from "react";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

const DashboardAdminManament = Loadable(
  lazy(() => import("views/dashboard-admin/ProjectManament"))
);
const DashboardAdminProjectWaiting = Loadable(
  lazy(() => import("views/dashboard-admin/ProjectWaiting"))
);

const Details = Loadable(
  lazy(() => import("views/dashboard-admin/ProjectManament/details"))
);
const DetailWaiting = Loadable(
  lazy(() => import("views/dashboard-admin/ProjectWaiting/Detail"))
);



const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    // {
    //   path: "/application/detail",
    //   search: "?_id=id&projectType=projectType",
    //   element: <DetailWaiting/>,
    // },
    // {
    //   path: "/project/detail/:id",
    //   search: "?projectType=:projectType",
    //   element: <Details/>,
    // },
    {
      path: "/detail-user",
      element: <DashboardAdminManament />,
    },
    {
      path: "/all-users",
      element: <DashboardAdminProjectWaiting />,
    },
    {
      path: "/manage-articles",
      element: <DashboardAdminProjectWaiting />,
    },
   
    
   
  ],
};

export default MainRoutes;
