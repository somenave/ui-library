import $ from './lib/lib';
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdowMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdowMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action 2</a>
            <a href="#" class="dropdown-item">Action 3</a>
        </div>
    </div>
    `
);

$('.dropdown-toggle').dropdown();