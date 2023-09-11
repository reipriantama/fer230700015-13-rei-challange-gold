import { handler } from "./apiService";

export const loginAdmin = (body) => handler.post("/admin/auth/login", body);

export const getCars = (queryParams) =>
  handler.get("/admin/v2/car", { params: queryParams });

// export default {
//     getCars: (queryParams) => handler.get('/admin/v2/car', { params: queryParams }),
//     getCarById: (id, queryParams) => handler.get(`/admin/car/${id}`, { params: queryParams }),
//     putCarById: (id, body) => handler.put(`/admin/car/${id}`, body)
// };
