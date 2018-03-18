import { reduce, some, includes, values } from 'lodash';

const searchInArrayOfObj = (array, key) =>
  reduce(
    array,
    (acc, item) =>
      (some(values(item), term =>
        includes(String(term), key.trimRight().trimLeft())
      ) && [...acc, item]) ||
      acc,
    []
  );

export default searchInArrayOfObj;
