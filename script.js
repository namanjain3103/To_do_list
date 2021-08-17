let inpListItem = $('#inpListItem');
let ulTask = $('#ulTask');
let btnAdd = $('#btnAdd');
let btnCancel = $('#btnCancel');
let btnSort = $('#btnSort');
let btnDelete = $('#btnDelete');

btnAdd.click(() => {
  let listItem =  $('<li>',{'class': 'list-group-item' ,
        text: inpListItem.val()
})
ulTask.append(listItem)
inpListItem.val('')
})

btnCancel.click(() => {inpListItem.val('')})