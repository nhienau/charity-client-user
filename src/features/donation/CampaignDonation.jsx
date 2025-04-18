import Spinner from "@/ui/Spinner";
import { useCampaignDonation } from "./useCampaignDonation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commafy, formatDateTime } from "@/utils/helpers";
import PaginationGroup from "@/ui/PaginationGroup";
import SearchBar from "@/ui/SearchBar";
import { useSearchParams } from "react-router-dom";

function CampaignDonation() {
  const { isLoading, data, isFetching } = useCampaignDonation();
  const [searchParams] = useSearchParams();

  const queryName = searchParams.get("name");

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { content } = data;

  return (
    <>
      <SearchBar
        queryParamKey="name"
        pageParamKey="donation-page"
        inputPlaceholder="Tìm kiếm theo tên..."
        loading={isLoading || isFetching}
        className="my-3"
      />
      <div className="flex flex-col gap-4">
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead>Người ủng hộ</TableHead>
              <TableHead className="w-[160px] text-right">Số tiền</TableHead>
              <TableHead>Thời gian</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="table-cell">
                  <span className="flex justify-center">
                    {queryName
                      ? "Không tìm thấy kết quả"
                      : "Chưa có người quyên góp"}
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              content.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.showIdentity
                      ? (row.donor?.defaultName ?? row.donorName?.name)
                      : "Nhà hảo tâm"}
                  </TableCell>
                  <TableCell className="text-right">{`${commafy(row.amount)} đ`}</TableCell>
                  <TableCell>{formatDateTime(row.createdAt)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <PaginationGroup pageInfo={data} searchParamKey="donation-page" />
      </div>
    </>
  );
}

export default CampaignDonation;
