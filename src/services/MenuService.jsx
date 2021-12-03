import ApiService from './ApiService';

const ENDPOINTS = {
  ONE: 'api/menu/:facilityId'
};

class MenuService extends ApiService {

    getOne = async facilityId => {
        const { data } = await this.apiClient.get(ENDPOINTS.ONE.replace(":facilityId", facilityId));
        const { menu_categories, ...otherProps } = data;
        let transformedData = {categories: menu_categories, ...otherProps};
        transformedData.categories = transformedData.categories.map(cat => {
            const { menu_items, ...otherProps } = cat;
            return { products: menu_items, ...otherProps};
        })

        return transformedData;

  };
}

const menuService = new MenuService();

export default menuService;