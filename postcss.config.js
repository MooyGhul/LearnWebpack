if(process.env.NODE_ENV === 'production') {
  module.exports = {
    plugin: {
      autoprefixer: {},
      cssnanno: {},
      'rucksack-css': {},
    }
  }
} else  {
  module.exports = {
    plugin: {
      autoprefixer: {},
      //cssnanno: {},
      'rucksack-css': {},
    }
  }
}