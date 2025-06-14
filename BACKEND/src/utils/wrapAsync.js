// utils/wrapAsync.js

const wrapAsync = (fn) => {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default wrapAsync;
