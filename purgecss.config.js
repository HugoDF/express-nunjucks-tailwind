module.exports = {
  content: ['src/views/**/*.html'],
  css: ['public/app.css'],
  extractors: [
    {
      extractor: {
        extract: (content) => content.match(/[A-z\d-:/]+/g)
      },
      extensions: ['html']
    }
  ]
};
