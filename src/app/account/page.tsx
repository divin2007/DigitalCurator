"use client";

import DashboardHeader from "@/components/account/DashboardHeader";
import SavedProperties from "@/components/account/SavedProperties";
import AddedListings from "@/components/account/AddedListings";
import StatusOverview from "@/components/account/StatusOverview";
import ActiveInquiries from "@/components/account/ActiveInquiries";
import SecuredAssets from "@/components/account/SecuredAssets";

export default function Account() {
  return (
    <div className="space-y-16">
      <DashboardHeader onContactClick={() => {}} />
      <StatusOverview />
      <SavedProperties />
      <ActiveInquiries />
      <SecuredAssets />
      <AddedListings />
    </div>
  );
}
