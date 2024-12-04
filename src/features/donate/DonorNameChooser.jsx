import Spinner from "@/ui/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationGroup from "@/ui/PaginationGroup";
import { useDonorNames } from "./useDonorNames";

function DonorNameChooser({ currentName, setName, phoneNum }) {
  const { isLoading, data, isFetching } = useDonorNames(phoneNum);

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { content } = data;

  return (
    <>
      <div>
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-6"></TableHead>
              <TableHead>Tên</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="table-cell">
                  <span className="flex justify-center">
                    Không tìm thấy tên
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              content.map((row) => (
                <TableRow
                  key={row.id}
                  className="has-[input:checked]:bg-slate-200"
                >
                  <TableCell className="w-6">
                    <input
                      type="radio"
                      name="donorName"
                      id={row.id}
                      defaultChecked={currentName?.id === row.id}
                      onChange={() => setName(row)}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor={row.id}>{row.name}</label>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationGroup pageInfo={data} />
    </>
  );
}

export default DonorNameChooser;
