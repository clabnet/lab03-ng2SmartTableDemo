// https://www.js-tutorials.com/javascript-tutorial/add-edit-delete-example-using-ng2-smart-angular-4-part-ii

export var settings = {
  columns: {
    // check1: {
    //   title: 'Checked',
    //   type: 'checkbox',
    //   defaultValue: true,
    //   editor: {
    //     type: 'checkbox'  
    //   }
    // },
    id: {
      title: 'ID',
      filter: false,
    },
    name: {
      title: 'Full Name',
      filter: true,
    },
    username: {
      title: 'User Name',
      filter: false,
    },
    email: {
      title: 'Email',
      filter: false,
    },
  },

  isPaginationEnabled: true,
  isGlobalSearchActivated: true,
  // itemsByPage: 10,
  selectionMode: 'single',

  // mode: "external",
  mode: 'inline',
  actions: {
    add: true, position: 'right',
    confirmCreate: true,
    custom: [{ name: 'View', title: `<i class="fa fa-eye" aria-hidden="true"></i>` }]
  },
  edit: {
    editButtonContent: '<i class="fa fa-1x fa-pencil-square" aria-hidden="true"></i>',
    saveButtonContent: '<i class="fa fa-1x fa-check"></i>',
    cancelButtonContent: '<i class="fa fa-1x fa-close"></i>',
    confirmSave: true
  },
  delete: {
    deleteButtonContent: '<i class="fa fa-1x fa-trash" aria-hidden="true"></i>',
    confirmDelete: true
  },



  pager: {
    display: true,
    perPage: 3
  },
  attr: {
    class: 'table table-striped table-bordered table-hover'
  },
  defaultStyle: true
};

export var data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  }
];
