export default createActionConstants = name => ({
  REQUEST: `${name}_REQUEST`,
  SUCCESS: `${name}_SUCCESS`,
  FAILURE: `${name}_FAILURE`,
});
