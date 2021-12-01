import ApiService from './ApiService';

const ENDPOINTS = {
  ONE: 'api/menu'
};

class MenuService extends ApiService {

    getOne = async () => {
    // const { data } = await this.apiClient.get(ENDPOINTS.ONE);

    const data1 = {
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        objectName: 'Restoran X',
        categories: [
            {
                name: 'Vegan',
                id: 1,
                products: [
                    {
                        id: 1,
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"

                    },
                    {
                        id: 2,
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"

                    },
                    {
                        id: 3,
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"

                    },
                ]
            },
            {
                name: 'Burgers222',
                id: 2,
                products: [
                    {
                        id: 4,
                        name: 'DRUGI NAZIIIV',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"

                    },
                    {
                        id: 5,
                        name: 'nesot',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                                                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


                    },
                    {
                        id: 6,
                        name: 'nes',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                                                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


                    },
                    {
                        id: 7,
                        name: 'nes pocinje na nes',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                                                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


                    },
                    {
                        id: 8,
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                                                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


                    }
                ]
            },
            {
                name: 'Beverage',
                id: 3,
                products: [
                    {
                        id: 9,
                        name: 'NOVO',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                                                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


                    },
                    {
                        id: 10,
                        name: 'vegan-salad',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        price: 18.2,
                                                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"


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