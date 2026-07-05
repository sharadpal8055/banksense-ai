import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Brain, Users, ChartBar, Shield, MessageCircle } from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: Brain,
  },

  {
    name: "Prospects",
    path: "/prospects",
    icon: Users,
  },

  {
    name: "AI Assistant",
    path: "/assistant",
    icon: MessageCircle,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: ChartBar,
  },

  {
    name: "Compliance",
    path: "/compliance",
    icon: Shield,
  },
];

function Sidebar() {
  const { logout } = useAuth();
  return (
    <div
      className="
w-64
h-screen
bg-slate-950
p-5
border-r
border-white/10
"
    >
      <h1
        className="
text-3xl
font-bold
gradient-text
mb-10
"
      >
        BankSense
      </h1>

      {links.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            to={item.path}
            className="
flex
items-center
gap-3
mb-6
text-gray-300
hover:text-white
"
          >
            <Icon size={20} />

            {item.name}
          </Link>
        );
      })}
      <button
        onClick={logout}
        className="
mt-10
text-red-400
"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
