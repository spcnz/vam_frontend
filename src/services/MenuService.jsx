import ApiService from './ApiService';

const ENDPOINTS = {
  ONE: 'api/menu'
};

class MenuService extends ApiService {

    getOne = async () => {
    // const { data } = await this.apiClient.get(ENDPOINTS.ONE);

    const data1 = {
        image: 'https://www.google.com/search?q=restoran+image&sxsrf=AOaemvI7sYrqvgKW2eOx1P6VawPzVfoVlQ:1638123043960&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiCnojx07v0AhVP_rsIHWdqAJIQ_AUoAXoECAIQAw&biw=1848&bih=948&dpr=1#imgrc=8x8TR6HUBI1EAM',
        objectName: 'Restoran X',
        categories: [
            {
                name: 'Vegan',
                products: [
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    }
                ]
            },
            {
                name: 'Burgers',
                products: [
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    }
                ]
            },
            {
                name: 'Beverage',
                products: [
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    }
                ]
            },
            {
                name: 'Salads',
                products: [
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    },
                    {
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: 'https://www.vijesti.me/data/images/2019/04/07/00/4367043_20190407180436_07b88b1c16ad00153b879570e63a6b72bc7656bc99f5bdedb7b5c74b7d43583f_ls.jpg'

                    }
                ]
            },
        ]

    }

    return data1;
  };
}

const menuService = new MenuService();

export default menuService;