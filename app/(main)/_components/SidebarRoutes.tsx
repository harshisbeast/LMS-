"use client";

import { ArrowLeft, BarChart, Compass, List, Plus } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { MdOutlineLeaderboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { cn } from "@/lib/utils";

const guestRoutes = [
  {
    icon: PiStudent,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: Compass,
    label: "Courses",
    href: "/search"
  },
  {
    icon: MdOutlineLeaderboard,
    label: "About Us", // ✅ label changed
    href: "/leaderboard" // ❗️kept the route same
  }
];

const teacherRoutes = [
  {
    icon: ArrowLeft,
    label: "Student Dashboard",
    href: "/dashboard"
  },
  {
    icon: Plus,
    label: "Create a Course",
    href: "/teacher/create"
  },
  {
    icon: List,
    label: "My Courses",
    href: "/teacher/courses"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics"
  }
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTecacherPage = pathname?.includes("/teacher");
  const routes = isTecacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className={cn("flex flex-col w-full py-6 gap-2")}>
      {routes.map((route, index) => (
        <SidebarItem
          key={index}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
