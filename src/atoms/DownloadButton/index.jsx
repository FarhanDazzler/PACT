import { MdOutlineFileDownload } from "react-icons/md";
import * as XLSX from "xlsx/xlsx.mjs";

export default function DownloadButtonAtom({ data = [], fileName }) {
  return (
    <button
      className="download-btn"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      <MdOutlineFileDownload />
      Download
    </button>
  );
}
