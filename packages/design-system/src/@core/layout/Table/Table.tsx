// 참고: https://mui.com/material-ui/react-table/
import { ReactNode } from 'react';
import { classNames } from '../../../wrappers';
import Stack, { StackProps } from '../Stack';
import Style from './table.module.scss';

export type TableProps = {
  children?: ReactNode;
} & Omit<StackProps, 'children'>;

const cx = classNames.bind(Style);

const TableRow = ({ children, className }: TableProps) => {
  return <tr className={cx(className)}>{children}</tr>;
};

const TableHead = ({ children, className }: TableProps) => {
  return <thead className={cx(className)}>{children}</thead>;
};

export type TableCellProps = TableProps & { width?: number };

const TableCell = ({ children, className, width, ...args }: TableCellProps) => {
  return (
    <th className={cx(className, `cell-width-${width != null ? Math.floor(width) : 'default'}`)}>
      <Stack {...args}>{children}</Stack>
    </th>
  );
};

const TableBody = ({ children, className }: TableProps) => {
  return <tbody className={cx(className)}>{children}</tbody>;
};

const TableData = ({ children, className, ...args }: TableProps) => {
  return (
    <td className={cx(className)}>
      <Stack {...args}>{children}</Stack>
    </td>
  );
};

export type Column = { field: string; headerName: string; width?: number };
export type Row = Record<string, any>;

type TablePropsExtended = Omit<TableProps, 'withBorder'> & {
  columns?: Column[];
  rowData?: Row[];
  alignTableHeaderNames?: TableProps['alignItems'];
  justifyTableHeadrNames?: TableProps['justifyContent'];
  alignTableData?: TableProps['alignItems'];
  justifyTableData?: TableProps['justifyContent'];
  isStriped?: boolean;
  borderMode?: 'none' | 'outer' | 'inner' | 'all' | 'horizontal' | 'vertical';
  cellWidths?: number[]; // 1과 99 사이 숫자각 셀의 너비를 담은 배열, set cellWidths to override width
};

const Table = ({
  children,
  className,
  rowData,
  columns,
  alignTableHeaderNames = 'center',
  alignTableData = 'center',
  justifyTableHeadrNames = 'start',
  justifyTableData = 'start',
  isStriped = false,
  borderMode = 'none',
  cellWidths = [],
}: TablePropsExtended) => {
  if (columns == null || rowData == null || rowData.length == 0) {
    return <table className={cx('tripie-table', `border-${borderMode}`, className)}>{children}</table>;
  } else {
    // 만약에 cellWidths 배열 길이가 제공한 column 길이보다 적거나 많으면 에러를 던진다.
    if (cellWidths?.length != null && cellWidths.length !== 0 && cellWidths.length !== columns.length) {
      throw new Error(
        `cellWidths count is ${cellWidths.length > columns.length ? 'less' : 'more'} than provided columns : provided ${cellWidths.length} value for cell widths, while column length is ${columns.length}`
      );
    }
    return (
      <table className={cx('tripie-table', `border-mode-${borderMode}`, className)}>
        <TableHead>
          <TableRow className={cx(className)}>
            {columns.map(({ field, headerName, width }, index) => (
              <TableCell
                alignItems={alignTableHeaderNames}
                justifyContent={justifyTableHeadrNames}
                key={field}
                className={cx(
                  isStriped ? 'striped' : '',
                  cellWidths?.length !== columns.length && width != null ? `cell-width-${Math.floor(width)}` : '',
                  cellWidths?.length === columns.length ? `cell-width-${Math.floor(cellWidths[index])}` : '',
                  cellWidths?.length !== columns.length && width == null ? 'default' : ''
                )}
              >
                {headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row, rowIndex) => (
            <TableRow key={JSON.stringify(row)}>
              {Object.keys(row).map((cell, index) =>
                index === 0 ? (
                  <TableCell
                    justifyContent={justifyTableHeadrNames}
                    alignItems={alignTableHeaderNames}
                    key={JSON.stringify(row[cell])}
                    className={cx(isStriped && rowIndex % 2 == 1 ? 'striped' : '')}
                  >
                    {row[cell] as ReactNode}
                  </TableCell>
                ) : (
                  <TableData
                    alignItems={alignTableData}
                    justifyContent={justifyTableData}
                    key={JSON.stringify(row[cell])}
                    className={cx(isStriped && rowIndex % 2 == 1 ? 'striped' : '')}
                  >
                    {row[cell] as ReactNode}
                  </TableData>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </table>
    );
  }
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Data = TableData;

export default Table;
