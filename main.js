$('#addBttn').on('click', function(e){
    e.preventDefault();
    let text = $('input').val();
    if(text.length>0){
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
    $('.shopping-list').append(addLi);
    text = $('input').val('');
    } else{
        alert('Add the note first!')
    }
})

$('ul').on('click', '.shopping-item-toggle', function(){
    $(this).closest("li").find(".shopping-item").toggleClass('shopping-item__checked');
})

$('ul').on('click', '.shopping-item-delete', function(){
    $(this).closest("li").fadeOut(400, function(){
        $(this).remove();
    });
})