/**
 * 只重写了columns，其他功能和ProTable完全一致
 */
import ProTable, { ProTableProps } from "@ant-design/pro-table";
import { convertColumns, MyTableColunms } from "./columns";

export type ParamsType = Record<string, any>;
export type MyBaseTableProps<T, U extends ParamsType = ParamsType, ValueType = "text"> = {
  columns: MyTableColunms<T, ValueType>[];
} &  Omit<ProTableProps<T, U, ValueType>,"columns">;

export function MyBaseTable<
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = "text"
>(props: MyBaseTableProps<DataType, Params, ValueType>) {
  const { columns, ...rest } = props;
  return (
    <ProTable
      {...rest}
      columns={columns.map((column) => convertColumns(column))}
    />
  );
}
