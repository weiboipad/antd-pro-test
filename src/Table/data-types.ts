import { ParamsType } from "./Base";
import { MyTableProps } from "./Table";

/**
 * Antd中TableProps的加载数据相关的props
 */
type TableDataSourceProps = "dataSource" | "loading";
/**
 * AntdPro中ProTableProps的加载数据相关的props
 */
type ProTableDataSourceProps =
  | TableDataSourceProps
  | "onDataSourceChange"
  | "request"
  | "params"
  | "onLoad"
  | "onLoadingChange"
  | "postData"
  | "defaultData"
  | "onRequestError"
  | "manualRequest"
  | "debounceTime"
  | "polling"
  | "revalidateOnFocus";

export type MyTablePropsWithoutData<
  T,
  U extends ParamsType = ParamsType,
  ValueType = "text"
> = Omit<MyTableProps<T, U, ValueType>, ProTableDataSourceProps>;

export type MyTableDataProps<
  T,
  U extends ParamsType = ParamsType,
  ValueType = "text"
> = Pick<MyTableProps<T, U, ValueType>, ProTableDataSourceProps>;