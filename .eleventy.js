const markdownIt = require("markdown-it"); 
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'src/static': './',
    'src/images': './images'
  });

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }));
    typographer:  true,

    eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  eleventyConfig.setDataDeepMerge(true);

  return {

    dir: {
      input: 'src',
      output: 'dist',
      includes: '_partials/',
      layouts: '_partials/_layouts',
      data: '_data',
    },
  };
};
