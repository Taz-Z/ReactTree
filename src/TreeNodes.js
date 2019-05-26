import React from 'react';
import './common.css';
import {Tree} from "./Tree";

export const TreeNode = ({node, onSelect}) => {

    const [displayChildren, setDisplayChildren] = React.useState(true);
    /* const [thisChecked, setThisChecked] = React.useState(isChecked);

     const changedOnSelect = (checked, node) => {
         setThisChecked(checked);
         onSelect(checked, node);
     };*/

    const getArrowClassName = (node) => {
        if (node.children && node.children.length > 0) return displayChildren ? 'triangle-up-small' : 'triangle-down-small';
        return '';

    };
    return node &&
        <React.Fragment>
            <div onClick={() => setDisplayChildren(!displayChildren)} className={getArrowClassName(node)}/>
            <input type='checkbox' onChange={(e) => onSelect(e.target.checked, node)}/>{node.name}
            {displayChildren && node.children && node.children.length > 0 &&
            <Tree treeNode={node.children} onSelect={(isChecked, newNode) => onSelect(isChecked, newNode)}/>}
        </React.Fragment>
};