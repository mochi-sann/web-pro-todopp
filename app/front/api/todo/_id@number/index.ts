/* eslint-disable */
import type * as Types from "../../@types";

export type Methods = {
  get: {
    status: 200;
    /** The found record */
    resBody: Types.TodoDto;
  };

  patch: {
    status: 200;
    resBody: Types.TodoDto;
    reqBody: Types.UpdateTodoDto;
  };

  delete: {
    status: 200;
    resBody: Types.TodoDto;
  };
};
