import Navbar from "@/components/homepageprops/Navbar";
import { LayoutProps } from '@/types';

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="h-full relative dark:bg-[#111827]">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-[#111827] ">
        <Navbar />
      </div>
      <main className="md:pl-72 pl-0">
        {children}
      </main>
    </div>
  );
}