import {axiosInstance} from "./axiosInstance";
import { redirect } from "react-router-dom";

export const getData = async <T = any>(
  endpoint: string,
  body?: object
): Promise<T | void> => {
  try {

    const resp = await axiosInstance.get(endpoint)
    // console.log('resp------',resp)
    if (resp && resp.status === 200) {
      return resp.data;
    } else if (resp && resp.status === 401) {
      console.log('401')
      // redirect("/login");
    } else if (resp && resp.status === 201) {
      return resp.data;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};

export const postData = async <T = any>(
  endpoint: string,
  body: object | null
): Promise<T | void> => {
  try { 
    const resp = await axiosInstance.post<T>(endpoint, body);
    if (resp && resp.status === 200) {
      return resp.data;
    }  else if (resp && resp.status === 201) {
      return resp.data;
    }
  } catch (error:any) {
    if (error.request.status === 401) {
      alert(error);
      console.error("Error occurred:", error.response);
      redirect("/login");
    } else {
      alert('else error--', );
      console.error("Error occurred:", error);
      throw error;
    }
  }
};

export const editData = async <T = any>(
  endpoint: string,
  body: object | null
): Promise<T | void> => {
  try {
    const resp = await axiosInstance.put<T>(endpoint, body);
    if (resp && resp.status === 200) {
      return resp.data;
    } else if (resp && resp.status === 401) {
      console.log("Put Error--");
      redirect("/login");
    } else if (resp && resp.status === 201) {
      return resp.data;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};

export const deleteData = async <T = any>(
  endpoint: string
): Promise<T | void> => {
  try {
    const resp = await axiosInstance.delete<T>(endpoint);
    console.log(resp);
    if (resp && resp.status === 200) {
      return resp.data;
    } else if (resp && resp.status === 401) {
      console.log("delete Error--");
      redirect("/login");
    } else if (resp && resp.status === 201) {
      console.log(resp);
      return resp.data;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};
