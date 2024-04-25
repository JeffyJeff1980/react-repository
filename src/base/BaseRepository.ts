import { AxiosResponse } from "axios";
import { HttpClient } from "../http/HttpClient";
import { CURRENT_BASE_URL } from "../constants/constants";

export interface IBaseRepository<T> {
  get(id: any): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  create(id: any, item: T): Promise<ApiResponse<T>>;
  update(id: any, item: T): Promise<ApiResponse<T>>;
  delete(id: any): Promise<ApiResponse<T>>;
}

export class ApiResponse<T> {
  data?: T;
  succeeded?: boolean;
  errors: any;
}

const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
  const result: ApiResponse<any> = {
    data: response.data,
    succeeded: response.status === 200 || response.status === 201,
    errors: response.data?.errors,
  };

  return new Promise((resolve, reject) => {
    if (result.succeeded) {
      resolve(result);
    } else {
      reject(result);
    }
  });
};

export abstract class BaseRepository<T> extends HttpClient implements IBaseRepository<T> {
  protected collection: string | undefined;

  public async get(id: string): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/${id}`).then(transform);
    return result as ApiResponse<T>;
  }

  public async getMany(): Promise<ApiResponse<T[]>> {
    const instance = this.createInstance();
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/`).then(transform);
    return result as ApiResponse<T[]>;
  }

  public async create(id: string, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.post(`${CURRENT_BASE_URL}/${this.collection}/`, item).then(transform);
    return result as ApiResponse<T>;
  }

  public async update(id: string, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.put(`${CURRENT_BASE_URL}/${this.collection}/${id}`, item).then(transform);
    return result as ApiResponse<T>;
  }

  public async delete(id: any): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.delete(`${CURRENT_BASE_URL}/${this.collection}/${id}`).then(transform);
    return result as ApiResponse<T>;
  }
}
