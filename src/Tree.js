import React from 'react';
import './common.css';
import {TreeNode} from "./TreeNodes";

export const Tree = ({treeNode, onSelect, selectedItems}) => {

    return <ul className='ul-no-bullets'> {treeNode.map(node => (
            <li>
                <TreeNode selectedItems={selectedItems} node={node} onSelect={(isChecked, newNode) => onSelect(isChecked, newNode)}/>
            </li>
        ))}
    </ul>
};