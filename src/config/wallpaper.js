let wallpaper = [
    'bg.jpg',
    'bg_default.jpg',
    'bg_girl.jpg'
  ]
  
  wallpaper = wallpaper.map(item => {
    return '/static/images/' + item
  })
  
  export default wallpaper