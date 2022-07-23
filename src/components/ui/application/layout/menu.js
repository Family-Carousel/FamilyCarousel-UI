export default [{
  text: '',
  items: [
    { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Dashboard', link: '#'  }
  ]
}, {
  text: 'Other',
  key: 'menu.others',
  items: [
    { icon: 'mdi-file-outline', key: 'menu.blank', text: 'Blank Page', link: '' },
    { key: 'menu.levels', text: 'Menu Levels',
      items: [
        { text: 'Menu Levels 2.1' },
        { text: 'Menu Levels 2.2',
          items: [
            { text: 'Menu Levels 3.1' },
            { text: 'Menu Levels 3.2' }
          ]
        }
      ]
    },
    { key: 'menu.disabled', text: 'Menu Disabled', disabled: true }
  ]
}]
