/**
 * 在MyBaseTable的基础上重写了selection、edit等逻辑，数据加载逻辑沿用ProTable
 */
import { MyBaseTable, MyBaseTableProps, ParamsType } from "./Base";

export type MyTableProps<T, U extends ParamsType = ParamsType, ValueType = "text"> = {
  rowSelection?: unknown
} & Omit<MyBaseTableProps<T, U, ValueType>,'rowSelection'>;

export function MyTable<
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = "text"
>(props: MyTableProps<DataType, Params, ValueType>) {
  // TODO: selection、edit等属性分离
  const { rowSelection, ...rest } = props;
  // TODO: 实现selection、edit等属性桥接
  return (
    <MyBaseTable<DataType, Params, ValueType>
      {...rest}
    />
  );
}
