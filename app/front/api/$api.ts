import type { AspidaClient, BasicHeaders } from "aspida";
import type { Methods as Methods0 } from ".";
import type { Methods as Methods1 } from "./todo";
import type { Methods as Methods2 } from "./todo/_id@number";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/todo";
  const GET = "GET";
  const POST = "POST";
  const DELETE = "DELETE";
  const PATCH = "PATCH";

  return {
    todo: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * @returns The found record
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods2["get"]["resBody"],
              BasicHeaders,
              Methods2["get"]["status"]
            >(prefix, prefix1, GET, option).json(),
          /**
           * @returns The found record
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods2["get"]["resBody"],
              BasicHeaders,
              Methods2["get"]["status"]
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          patch: (option: {
            body: Methods2["patch"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<
              Methods2["patch"]["resBody"],
              BasicHeaders,
              Methods2["patch"]["status"]
            >(prefix, prefix1, PATCH, option).json(),
          $patch: (option: {
            body: Methods2["patch"]["reqBody"];
            config?: T | undefined;
          }) =>
            fetch<
              Methods2["patch"]["resBody"],
              BasicHeaders,
              Methods2["patch"]["status"]
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods2["delete"]["resBody"],
              BasicHeaders,
              Methods2["delete"]["status"]
            >(prefix, prefix1, DELETE, option).json(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods2["delete"]["resBody"],
              BasicHeaders,
              Methods2["delete"]["status"]
            >(prefix, prefix1, DELETE, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns 登録したメンバー設定を返却
       */
      post: (option: {
        body: Methods1["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods1["post"]["resBody"],
          BasicHeaders,
          Methods1["post"]["status"]
        >(prefix, PATH0, POST, option).json(),
      /**
       * @returns 登録したメンバー設定を返却
       */
      $post: (option: {
        body: Methods1["post"]["reqBody"];
        config?: T | undefined;
      }) =>
        fetch<
          Methods1["post"]["resBody"],
          BasicHeaders,
          Methods1["post"]["status"]
        >(prefix, PATH0, POST, option)
          .json()
          .then((r) => r.body),
      /**
       * @returns Todo を一覧で取得する
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1["get"]["resBody"],
          BasicHeaders,
          Methods1["get"]["status"]
        >(prefix, PATH0, GET, option).json(),
      /**
       * @returns Todo を一覧で取得する
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<
          Methods1["get"]["resBody"],
          BasicHeaders,
          Methods1["get"]["status"]
        >(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, "", GET, option).text(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<
        Methods0["get"]["resBody"],
        BasicHeaders,
        Methods0["get"]["status"]
      >(prefix, "", GET, option)
        .text()
        .then((r) => r.body),
    $path: () => `${prefix}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
