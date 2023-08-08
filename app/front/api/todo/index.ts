/* eslint-disable */
import type * as Types from "../@types";

export type Methods = {
  post: {
    status: 201;
    /** 登録したメンバー設定を返却 */
    resBody: Types.TodoDto;
    reqBody: Types.CreateTodoDto;
  };

  get: {
    status: 200;
    /** Todo を一覧で取得する */
    resBody: Types.TodoDto[];
  };
};
