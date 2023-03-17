/**
 * 在MyTable的基础上用新的Request Props替换了原有的数据加载相关Props，
 */
import { ParamsType } from "./Base";
import { MyTable } from "./Table";
import {
  MyTableRequestProps,
  useRequest,
} from "./data";
import { MyTablePropsWithoutData } from "./data-types";

export type MyRequestTableProps<
  T,
  U extends ParamsType = ParamsType,
  ValueType = "text"
> = MyTableRequestProps<T, U> & MyTablePropsWithoutData<T, U, ValueType>;

export function MyReuquestTable<
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = "text"
>(props: MyRequestTableProps<DataType, Params, ValueType>) {
  // TODO: 请求相关属性
  const { request, params, ...rest } = props;
  const requestProps: MyTableRequestProps<DataType, Params> = {
    request,
    params,
  };
  
  const tableProps: MyTablePropsWithoutData<DataType, Params, ValueType> = rest;
  return (
    <MyTable<DataType, Params, ValueType>
      {...tableProps}
      {...useRequest(requestProps)}
    />
  );
}
