import React from 'react';
import './common.css';
import {Tree} from "./Tree";

export const TreeNode = ({node, onSelect, selectedItems}) => {

    const [displayChildren, setDisplayChildren] = React.useState(true);
   // const [thisChecked, setThisChecked] = React.useState((false));

    const getArrowClassName = (node) => {
        if (node.children && node.children.length > 0) return displayChildren ? 'triangle-up-small' : 'triangle-down-small';
        return '';
    };


    return node &&
        <React.Fragment>
            <div onClick={() => setDisplayChildren(!displayChildren)} className={getArrowClassName(node)}/>
            <input type='checkbox'  checked={node.isChecked} onChange={(e) => onSelect(e.target.checked, node)}/>{node.name}
            {displayChildren && node.children && node.children.length > 0 &&
            <Tree selectedItems={selectedItems} treeNode={node.children} onSelect={(isChecked, newNode) => onSelect(isChecked, newNode)}/>}
        </React.Fragment>
};