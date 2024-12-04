import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchBar from "@/ui/SearchBar";
import { CAMPAIGN_FILTER_OPTIONS } from "@/utils/constants";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCampaigns } from "./useCampaigns";
import { HiChevronDown } from "react-icons/hi2";

function CampaignSearch() {
  const { isLoading, data, isFetching } = useCampaigns();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState(
    CAMPAIGN_FILTER_OPTIONS[0],
  );

  function onItemClick(option) {
    setSelectedOption(option);
    searchParams.set("filter", option.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-4 flex gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex items-center justify-between gap-2 rounded-lg border-[1px] border-solid border-slate-300 bg-slate-100 px-3 py-1 shadow-sm"
            disabled={isLoading || isFetching}
          >
            <span>{selectedOption.label}</span>
            <HiChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 bg-white">
          {CAMPAIGN_FILTER_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onItemClick(option)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <SearchBar
        queryParamKey="query"
        pageParamKey="page"
        inputPlaceholder="Tìm kiếm chiến dịch..."
        isLoading={isLoading || isFetching}
      />
    </div>
  );
}

export default CampaignSearch;
