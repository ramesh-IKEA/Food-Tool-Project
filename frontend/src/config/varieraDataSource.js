import {fetchData} from '../utils/getData'
const verieraSupplierLink= 'https://www.ikea.com/global/assets/variera/in-team/qsc-supplier-data/data.json';
const verieraArticlesLink= 'https://www.ikea.com/global/assets/variera/in-team/qsc-articles-data/data.json';
const verieraSupplierArticlesLink= 'https://www.ikea.com/global/assets/variera/in-team/qsc-supplier-articles-data/data.json';
const verieraStoreLocarionLink= 'https://www.ikea.com/global/assets/variera/in-team/qsc-store-locations/data.json';
export const SenderData = await fetchData(verieraSupplierLink);
export const articlesList = await fetchData(verieraArticlesLink);
export const supplierArticlesList = await fetchData(verieraSupplierArticlesLink);
export const storeLocation = await fetchData(verieraStoreLocarionLink);