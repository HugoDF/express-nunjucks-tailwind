module.exports = {
  content: ['src/views/**/*.html'],
  css: ['public/app.css'],
  extractors: [
    {
      extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      extensions: ['html']
    }
  ]
};
