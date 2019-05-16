const datas = [
  {
    name: 'Lien n°1',
    slug: 'article1',
    value: 'Nam finibus sagittis elementum. Donec vehicula orci diam, sit amet semper leo ornare sed. Ut neque neque, ullamcorper et metus et, sodales posuere turpis. Mauris molestie gravida mi vel commodo. Quisque auctor libero vel suscipit semper. Morbi non enim dolor. Fusce sit amet ex vehicula, fringilla arcu ut, malesuada magna. Mauris nec odio accumsan, dictum urna ut, euismod orci.',
  },
  {
    name: 'Lien n°2',
    slug: 'article2',
    value: 'Vivamus et ullamcorper libero. Nunc eu purus consectetur, pretium risus vel, dictum ante. Mauris neque lorem, eleifend a elementum eget, rhoncus in nibh. Phasellus dui magna, lacinia ac ante ut, sollicitudin finibus neque. Duis lacus diam, faucibus nec mattis condimentum, semper a nisi. Integer ac felis at tortor posuere tincidunt eget nec urna. Nulla id dapibus sem.',
  },
  {
    name: 'Lien n°3',
    slug: 'article3',
    value: 'Sed a varius est. Phasellus a fermentum risus. Duis eget iaculis purus. Duis gravida enim vitae laoreet tincidunt. Sed tincidunt vehicula sem, eget gravida est gravida et. Proin venenatis est eget laoreet maximus. Curabitur dapibus, risus viverra laoreet dictum, justo lorem placerat odio, id vehicula metus libero eget lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id orci vel justo pellentesque luctus id et justo. Fusce nec convallis tortor. Vestibulum ipsum tortor, bibendum et elementum eget, dapibus in tortor. Etiam id vestibulum ligula, ut tempor lorem. Pellentesque in libero nec eros porta lobortis non eget eros. Aliquam lacus mi, placerat vitae velit sed, venenatis facilisis leo. In at augue magna.',
  },
  {
    name: 'Lien n°4',
    slug: 'article4',
    value: 'Etiam dictum mattis mi, et pellentesque magna egestas gravida. Nulla diam dui, scelerisque at sagittis in, scelerisque a justo. Curabitur bibendum nisl eros, eget scelerisque felis eleifend at. Pellentesque commodo purus lobortis lacus pretium condimentum. Phasellus at ultrices justo. Pellentesque feugiat tempor felis, id ornare neque eleifend id. Donec id elit non justo scelerisque consequat. In ornare massa et venenatis congue. Sed euismod rutrum viverra. Vestibulum massa nulla, pretium vel enim vitae, porttitor tincidunt ligula. Cras eleifend maximus vulputate. Integer tincidunt faucibus finibus. Suspendisse potenti.',
  },
];

export default datas;

export const selectDataBySlug = slug => (
  datas.find(data => data.slug === slug)
);
