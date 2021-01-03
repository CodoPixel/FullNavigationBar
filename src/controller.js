// the sidebar
(function(){
    var sidebar = document.querySelector('#sidebar');
    var crossSidebar = document.querySelector('.sidebar-cross');
    var shader = document.querySelector('.sidebar-shader');
    var burger = document.querySelector('.burger');
    var allButtons = document.querySelectorAll('.sidebar-dropdown-name');

    // Burger
    burger.addEventListener('click', function() {
        burger.classList.toggle('toggle-burger');
        sidebar.classList.add('toggle-sidebar');
    });

    function closeSidebar() {
        burger.classList.remove('toggle-burger');
        sidebar.classList.remove('toggle-sidebar');
        bringBackOtherMenusWithout(null);
    }

    // Cross to close the sidebar
    crossSidebar.addEventListener('click', closeSidebar);

    // Shader to close the sidebar too
    shader.addEventListener('click', closeSidebar);

    // Dropdown
    function bringBackOtherMenusWithout(button) {
        Array.from(allButtons).forEach(function(btn) {
            if (btn !== button) {
                var p = btn.parentElement;
                if (p.classList.contains('toggle-dropdown')) p.classList.remove('toggle-dropdown');
            }
        });
    }

    Array.from(allButtons).forEach(function(button) {
        var parent = button.parentElement;
        button.addEventListener('click', function() {
            bringBackOtherMenusWithout(button);
            parent.classList.toggle('toggle-dropdown');
        });
    });
})();

// the dropdown menus

window.addEventListener('load', function(e) {
    var buttons = document.querySelectorAll(".name-of-dropdown");
    Array.from(buttons).forEach(function(btn) {
        var parent = btn.parentElement;
        var content = parent.querySelectorAll('.content-dropdown')[0];
        parent.addEventListener('mouseover', function() {
            if (!content.classList.contains('dropdown-visible')) {
                content.classList.add('dropdown-visible');
            }
        });
        parent.addEventListener('mouseout', function() {
            content.classList.remove('dropdown-visible');
        });
        content.addEventListener('mouseover', function() {
            content.classList.add('dropdown-visible');
        });
        content.addEventListener('mouseout', function() {
            content.classList.remove('dropdown-visible');
        });
    });
});