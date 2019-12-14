export const getApi = (_req, res) => {
  res.json({
    status: 'API is working!',
    message: 'Welcome!',
  });
};

export const getStatus = (_req, res) => {
  res.send({status: 'ok'});
};

export default {
  getApi,
  getStatus,
};
