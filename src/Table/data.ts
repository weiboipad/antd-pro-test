import { ParamsType } from "./Base";
import { MyTableDataProps } from "./data-types";

export type MyTableRequestProps<T, U> = {
  // TODO: 请求相关属性
  request?: Promise<T[]>;
  params?: U;
};

export function useRequest<T, U extends ParamsType = ParamsType>(
  props: MyTableRequestProps<T, U>
) {
  // TODO: 实现请求桥接
  const ret: MyTableDataProps<T, U> = {};
  return ret;
}

export type MyTableDataSourceProps<T> = {
  // TODO: 数据相关属性
  dataSource?: T[];
};

export function useDataSource<T>(props: MyTableDataSourceProps<T>) {
  // TODO: 数据桥接到请求方式
  const ret: MyTableDataProps<T> = {};
  return ret;
}
