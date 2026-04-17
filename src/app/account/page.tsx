import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardHeader from "@/components/account/DashboardHeader";
import QuickStatus from "@/components/account/QuickStatus";
import ActiveInquiries from "@/components/account/ActiveInquiries";
import SavedProperties from "@/components/account/SavedProperties";
import SecuredAssets from "@/components/account/SecuredAssets";
import AddedListings from "@/components/account/AddedListings";
import DashboardSidebar from "@/components/account/DashboardSidebar";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
        <DashboardHeader />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Primary Content Area */}
          <div className="md:col-span-8 space-y-16">
            <QuickStatus />
            <ActiveInquiries />
            <SavedProperties />
            <SecuredAssets />
            <AddedListings />
          </div>

          {/* Sidebar Context Area */}
          <DashboardSidebar />
        </div>
      </main>
      <Footer />
    </>
  );
}
