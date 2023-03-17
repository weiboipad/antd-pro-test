import { ProColumnType, ProColumnGroupType } from "@ant-design/pro-table/es/typing";

export type MyTableColumnType<T = unknown, ValueType = 'text'> = ProColumnType<T,ValueType> & {
  // TODO: 各种自定义的Column属性
  myProps: any;
};

export type MyTableColumnGroupType<RecordType, ValueType> = {
  children: MyTableColunms<RecordType>[];
} & MyTableColumnType<RecordType, ValueType>;
export type MyTableColunms<T = any, ValueType = 'text'> = MyTableColumnGroupType<T, ValueType> | MyTableColumnType<T, ValueType>;

export function convertColumns<T, ValueType>(
  columns: MyTableColunms<T, ValueType>
) {
  const { myProps, ...rest } = columns;
  if ("children" in rest) {
    const { children, ...other } = rest;
    const ret: ProColumnGroupType<T, ValueType> = {
      ...other,
      children: children.map((child) => convertColumns(child)),
    };
    return ret;
  }
  // TODO: 实现column桥接
  const ret: ProColumnType<T, ValueType> = rest;
  return ret;
}