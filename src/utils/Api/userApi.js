import axiosClient from '~/utils/Api/axiosClient';

const userAdminApi = {
  getAll(params) {
    const url = '/userAdmin';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/userAdmin/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/userAdmin';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/userAdmin/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/userAdmin/${id}`;
    return axiosClient.delete(url);
  },
};

export default userAdminApi;
