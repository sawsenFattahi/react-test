import { contacts, articles } from '../data';

const assetTypesData = {
  contact: {
    data: contacts,
    idPath: 'APNR'
  },
  article: {
    data: articles,
    idPath: 'ARTIKEL'
  }
};

const findWithId = (data, idPath, assetId) =>
  data.find(item => item[idPath] === assetId);

const fakeRequest = ({ assetType, assetId, delay, detail = false }) =>
  new Promise((resolve, reject) => {
    const { data: { Data: data }, idPath } = assetTypesData[assetType];
    const resolvedData = !detail ? data : findWithId(data, idPath, assetId);
    setTimeout(resolve, delay, resolvedData);
  });

export default fakeRequest;
