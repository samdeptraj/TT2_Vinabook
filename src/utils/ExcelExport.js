import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

class ExcelExport {
    exportToExcel = (data, filename) => {
        const fileType =
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: fileType });
        const fileName = filename + fileExtension;
        saveAs(blob, fileName);
    };
}

const excelExport = new ExcelExport();
export default excelExport;
