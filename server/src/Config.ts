export default {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  signed: true,
  rolling: false,
  renew: false,
  secure: true,
};
