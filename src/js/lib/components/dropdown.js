import $ from "../core";

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this.getAttr('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropdown();