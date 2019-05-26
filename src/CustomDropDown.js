import React from "react";
import './common.css';
import {Tree} from "./Tree";

export const CustomDropDown = (props) => {
    const [displayList, setDisplayList] = React.useState(false);
    const [selectedItems, setSelectedItems] = React.useState([]);
    React.useEffect(() => console.log(selectedItems));

    /**
     * Adds uniques entries or removes bottom level nodes from display
     *
     * @param isChecked true if checkbox is checked
     * @param node node of tree that was un/checked
     */
    const onSelect = (isChecked, node) => {
        const newSelectedItems = changedNodesList(node);
        if (isChecked)  {
            const idOfCurrItems = selectedItems.map(newNode => newNode.id);
            setSelectedItems(removeDuplicates([...selectedItems,
                ...newSelectedItems.filter(item => !idOfCurrItems.includes(item.id))])) //Filter non uniques then add
        }
        else {
            const idOfNewItems = newSelectedItems.map(newNode => newNode.id);
            setSelectedItems(selectedItems.filter(item => !idOfNewItems.includes(item.id)));
        }
    };

    /**
     * Recursive function that adds all subNodes to a list before returning it,
     * used when user checks a top level checkbox
     *
     * @param node top level node that was checked (recursively becomes bottom node)
     * @returns {Array} of bottom level nodes
     */
    const changedNodesList = (node) => {
        let changedNodes = [];
        if (!node.children || node.children.length === 0) changedNodes.push(node); //Base Case, no children!

        node.children.map((nodeChild) => {
            changedNodes = [...changedNodes, ...changedNodesList(nodeChild)] //es6 combine two arrays
        });
        return changedNodes;
    };

    /**
     * Removes duplicates of from an array
     * @param arr array with potential duplicates
     * @returns {Array} of unique nodes
     */
    const removeDuplicates = (arr) => {
        return arr.reduce((uniqueNodes, node) => {
            if (!uniqueNodes.some(currNode => currNode.id === node.id)) {
                uniqueNodes.push(node);
            }
            return uniqueNodes;
        }, []);
    };

    /**
     * Removes an item from the list of selected items
     *
     * @param id of item
     */
    const removeFromDisplay = (id) => {
      setSelectedItems(selectedItems.filter(item => item.id !== id))
    };



    return <div>
        <div className={!displayList ? 'customDropDownWrapper' : 'customDropDownWrapperExtended'}>
            <div className={displayList ? 'customDropDown' : 'customDropDown-hide'}>
                {selectedItems && selectedItems.length === 0 && <h3 className='dropdown-placeholder-text'>{props.placeholder ? props.placeholder : 'Press the arrow!'}</h3>}
                {selectedItems && selectedItems.map((item) => (<button className='dropdown-select-button' onClick={() => removeFromDisplay(item.id)}>{item.name}</button>))}
                {displayList &&
                <Tree isChecked={false}
                      treeNode={props.data}
                      onSelect={(isChecked, node) => onSelect(isChecked, node)}/>
                }
            </div>
            <div className={displayList ? 'triangle-up' : 'triangle-down'}
                 onClick={() => setDisplayList(!displayList)}/>
        </div>

    </div>

};