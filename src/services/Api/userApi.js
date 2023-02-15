import axiosClient from '~/services/Api/axiosClient';

const userAdminApi = {
  getAll(params) {
    const url = '/staff';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/staff/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/staff';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/staff/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/staff/${id}`;
    return axiosClient.delete(url);
  },
};

export default userAdminApi;
