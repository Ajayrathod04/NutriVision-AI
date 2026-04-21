import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-dark">
      {/* Sidebar - Hidden on mobile, handled by component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 transition-all duration-300">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
