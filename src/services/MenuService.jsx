import ApiService from './ApiService';

const ENDPOINTS = {
  ONE: 'menu/:facilityId'
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

    // const data1 = {
    //     image: "https://img.taste.com.au/JNYsCm2d/w720-h480-cfill-q80/taste/2016/11/grilled-seafood-platter-81225-1.jpeg",
    //     facilityName: 'Jadran',
    //     categories: [
    //         {
    //             name: 'Riba',
    //             id: 1,
    //             products: [
    //                 {
    //                     id: 1,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.29999,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 2,
    //                     name: 'Losos',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 3,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Morski plodovi',
    //             id: 2,
    //             products: [
    //                 {
    //                     id: 4,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 5,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"
    //                 },
    //                 {
    //                     id: 6,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"
    //                 },
    //                 {
    //                     id: 7,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg",
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'Pasta',
    //             id: 3,
    //             products: [
    //                 {
    //                     id: 9,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg",


    //                 },
    //                 {
    //                     id: 10,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg",

    //                 }
    //             ]
    //         },
    //         {
    //             name: 'Burgeri',
    //             id: 4,
    //             products: [
    //                 {
    //                     id: 11,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 12,
    //                     name: 'Losos',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 13,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Salate',
    //             id: 5,
    //             products: [
    //                 {
    //                     id: 14,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 15,
    //                     name: 'Losos',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 16,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //             ]
    //         },
    //         {
    //             name: 'Pizza',
    //             id: 6,
    //             products: [
    //                 {
    //                     id: 17,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 18,
    //                     name: 'Losos',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //                 {
    //                     id: 19,
    //                     name: 'Jelo',
    //                     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //                     price: 18.2,
    //                     item_images: "https://img.taste.com.au/z_S6BhQY/taste/2018/03/apr-18_salmon-with-parsley-salad-3000x2000-136320-1.jpg"

    //                 },
    //             ]
    //         },
           
    //     ]

    // }

    // return data1;
  };
}

const menuService = new MenuService();

export default menuService;