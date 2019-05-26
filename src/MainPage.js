import React from 'react';
import {CustomDropDown} from "./CustomDropDown";


export const MainPage = () => {
    const tree = [
        {name: 'Name1', id:1, children:[
                {name: 'Name1C1', id:1, children:[
                        {name:'Name1C1C1', id:1, children:[]},
                        {name:'Name1C1C2', id:2, children:[]},
                        {name:'Name1C1C3', id:3, children:[]},
                    ]
                },
                {name: 'Name1C2', id:2, children:[
                        {name:'Name1C2C1', id:4, children:[]},
                        {name:'Name1C2C2', id:5, children:[]},
                        {name:'Name1C2C3', id:1, children:[]},
                    ]
                },
            ]
        },
        {name: 'Name2', id:2, children:[
                {name: 'Name2C1', id:3, children:[
                        {name:'Name2C1C1', id:6, children:[]},
                        {name:'Name2C1C2', id:7, children:[]},
                        {name:'Name2C1C3', id:8, children:[]},
                    ]
                },
                {name: 'Name2C2', id:4, children:[
                        {name:'Name2C2C1', id:9, children:[]},
                        {name:'Name2C2C2', id:10, children:[]},
                        {name:'Name2C2C3', id:11, children:[]},
                    ]
                },
            ]
        }
    ];

    return <CustomDropDown data={tree} placeholder={'Select a name'}/>
};


