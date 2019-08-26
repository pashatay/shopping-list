$('#addBttn').on('click', function(e){
    e.preventDefault();
    let text = $('input').val();
    let addLi = `<li><span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
    $('.shopping-list').append(addLi)
})

$('ul').on('click', '.shopping-item-toggle', function(e){
    event.stopPropagation();
    $(this).find('.shopping-item').fadeOut();
})