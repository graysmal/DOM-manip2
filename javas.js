"use strict";

const input = document.querySelector("#item");
const add_btn = document.querySelector("#add_btn");
const list = document.querySelector("#item_list");


add_btn.addEventListener('click', addItem);

function addItem() {
    let new_item = document.createElement('li');
    new_item.textContent = input.value;
    list.append(new_item);
}