import { TableCell, TableRow } from "@/components/ui/table";
import { commafy, formatDateTime } from "@/utils/helpers";

function DonationRow({ donation }) {
  const {
    campaign: { name },
    amount,
    createdAt,
    showIdentity,
  } = donation;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell className="text-right">{`${commafy(amount)} đ`}</TableCell>
      <TableCell>{formatDateTime(createdAt)}</TableCell>
      <TableCell>{showIdentity ? "Không" : "Có"}</TableCell>
    </TableRow>
  );
}

export default DonationRow;
