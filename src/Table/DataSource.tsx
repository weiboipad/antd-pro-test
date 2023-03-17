/**
 * 在MyTable的基础上用新的DataSource Props替换了原有的数据加载相关Props，
 */
import { ParamsType } from "./Base";
import { MyTable } from "./Table";
import { MyTableDataSourceProps, useDataSource } from "./data";
import { MyTablePropsWithoutData } from "./data-types";

export type MyDataSourceTableProps<
  T,
  ValueType = "text"
> = MyTableDataSourceProps<T> &
  MyTablePropsWithoutData<T, ParamsType, ValueType>;

export function MyDataSourceTable<
  DataType extends Record<string, any>,
  ValueType = "text"
>(props: MyDataSourceTableProps<DataType, ValueType>) {
  // TODO: 数据相关属性分离
  const { dataSource, ...rest } = props;
  const dataSourceProps: MyTableDataSourceProps<DataType> = {
    dataSource,
  };
  
  const tableProps: MyTablePropsWithoutData<DataType, ParamsType, ValueType> =
    rest;
  return (
    <MyTable<DataType, ParamsType, ValueType>
      {...tableProps}
      {...useDataSource(dataSourceProps)}
    />
  );
}
