// filter Js 
document.addEventListener('DOMContentLoaded', function() {
    let filterItems = document.querySelectorAll('.filter-item');
    let postBoxes = document.querySelectorAll('.post-box');

    filterItems.forEach(function(item) {
        item.addEventListener('click', function() {
            let value = this.getAttribute('data-filter');

            if (value === 'all') {
                postBoxes.forEach(function(box) {
                    box.style.display = 'block';
                });
            } else {
                postBoxes.forEach(function(box) {
                    if (!box.classList.contains(value)) {
                        box.style.display = 'none';
                    } else {
                        box.style.display = 'block';
                    }
                });
            }
        });
    });
});

