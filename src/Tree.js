import React from 'react';
import './common.css';
import {TreeNode} from "./TreeNodes";

export const Tree = ({treeNode, onSelect}) => {
   /* const [thisChecked, setThisChecked] = React.useState(isChecked);

    const changedOnSelect = (checked, node) => {
        setThisChecked(checked);
        onSelect(checked, node);
    };*/

    return <ul className='ul-no-bullets'> {treeNode.map(node => (
            <li>
                <TreeNode node={node} onSelect={(isChecked, newNode) => onSelect(isChecked, newNode)}/>
            </li>
        ))}
    </ul>
};