const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log("\t", store.getState());
  const result = next(action);
  console.log("\t", store.getState());
  return result;
};

export default myLogger;
