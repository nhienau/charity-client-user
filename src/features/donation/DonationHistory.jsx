import Spinner from "@/ui/Spinner";
import { useDonationHistory } from "./useDonationHistory";
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

function DonationHistory() {
  const { isLoading, data, isFetching } = useDonationHistory();

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
            {content.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.donorName?.name ?? "Nhà hảo tâm"}</TableCell>
                <TableCell className="text-right">{`${commafy(row.amount)} đ`}</TableCell>
                <TableCell>{formatDateTime(row.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationGroup pageInfo={data} searchParamKey="donation-page" />
      </div>
    </>
  );
}

export default DonationHistory;
