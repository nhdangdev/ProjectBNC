import * as httpRequest from '~/services/httpRequest';

export const search = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.long(error);
  }
};
