"use strict";

const input = document.querySelector("#item");
const add_btn = document.querySelector("#add_btn");
const list = document.querySelector("#item_list");


add_btn.addEventListener('click', addItem);

function addItem() {
    let new_item_text = input.value;
    input.value = "";

    let new_item_li = document.createElement('li');
    let new_item_span = document.createElement('span');
    let new_item_btn = document.createElement('button');

    new_item_li.append(new_item_span, new_item_btn);
    
    new_item_span.textContent = new_item_text;
    new_item_btn.textContent = "Delete";

    new_item_btn.addEventListener('click', function() {
        list.removeChild(new_item_li);
    });

    list.append(new_item_li);
    input.focus();
}