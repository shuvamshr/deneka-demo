"use client";

import Header from "@/app/components/global/Header/Header";
import HeaderAction from "@/app/components/global/Header/HeaderAction/HeaderAction";
import InquiryCardCollection from "@/app/components/pages/Inquiry/InquiryCardCollection/InquiryCardCollection";
import Subheader from "@/app/components/global/Header/Subheader/Subheader";
import Filter from "@/app/components/global/Header/Subheader/Filter/Filter";

import inquiriesData from "../data";

export default function InquiryPage({
  params,
}: {
  params: { category: string };
}) {
  // Count occurrences of each status
  const statusCounts = countStatusOccurrences(inquiriesData);

  // Calculate total count of all inquiries
  const totalCount = inquiriesData.length;

  // Filter data based on category
  const filteredData = filterDataByCategory(inquiriesData, params.category);

  // Format data for display
  const formattedData = formatData(filteredData);

  // Calculate active inquiry count
  const activeCount = calculateActiveInquiryCount(statusCounts);

  return (
    <>
      <div className="flex flex-col top-0 sticky">
        <div className="flex flex-row">
          <Header title="Inquiry" value={activeCount} />

          <HeaderAction
            title={"Create Inquiry"}
            path={"/inquiry/new"}
            info={`${activeCount} ACTIVE INQUIRY`}
          />
        </div>
        <Subheader type="filter">
          {/* Filter components */}
          {renderFilters(statusCounts, params, totalCount)}
        </Subheader>
      </div>

      <div className="container mx-auto p-5">
        <InquiryCardCollection data={formattedData} />
      </div>
    </>
  );
}

// Function to count occurrences of each status
function countStatusOccurrences(data: any[]) {
  let statusCounts: { [key: string]: number } = {};
  data.forEach((entry: any) => {
    const status = entry.status.toLowerCase();
    statusCounts[status] = (statusCounts[status] || 0) + 1;
  });
  return statusCounts;
}

// Function to filter data based on category
function filterDataByCategory(data: any[], category: string) {
  if (category.toLowerCase() === "all") {
    return data;
  }
  return data.filter(
    (entry: any) => entry.status.toLowerCase() === category.toLowerCase()
  );
}

// Function to format data for display
function formatData(data: any[]) {
  return data.map((entry: any) => ({
    ...entry,
    client: `${entry.client.name}, ${entry.client.company}`,
  }));
}

// Function to calculate active inquiry count
function calculateActiveInquiryCount(statusCounts: { [key: string]: number }) {
  return (statusCounts["overdue"] || 0) + (statusCounts["pending"] || 0);
}

// Function to render filter components
function renderFilters(
  statusCounts: { [key: string]: number },
  params: { category: string },
  totalCount: number
) {
  const filters = [
    { category: "all", label: "All" },
    { category: "overdue", label: "Overdue" },
    { category: "pending", label: "Pending" },
    { category: "issued", label: "Ticket Issued" },
    { category: "archived", label: "Archived" },
  ];

  return filters.map(({ category, label }) => (
    <Filter
      key={category}
      value={category === "all" ? totalCount : statusCounts[category] || 0}
      path={`/inquiry/${category}`}
    >
      {label}
    </Filter>
  ));
}
