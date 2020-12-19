// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { default: Axios } = require("axios");
const axios = Axios.create({
  baseURL: "https://admin.avantage.events/api/",
  headers: {
    "content-language": "ru",
  },
});

module.exports = function(api) {
  api.loadSource(async (actions) => {
    const { data } = await axios.get("FullPage");
    const collection = actions.addCollection("FullPage");
    collection.addNode({
      id: data.id,
      aboutSection: data.aboutSection,
      cateringSection: data.cateringSection,
      registerSection: data.registerSection,
      standSection: data.standSection,
    });
  });

  api.loadSource(async (actions) => {
    const { data } = await axios.get("portfolio");
    for (const item of data) {
      const { data } = await axios.get("portfolio/" + item.id);
      item.text = data.text;
      item.carousel = data.carousel;
    }
    const collection = actions.addCollection("Portfolio");
    for (const item of data) {
      collection.addNode({
        id: item.id,
        image: item.image,
        title: item.title,
        text: item.text,
        carousel: item.carousel,
      });
    }
  });


  api.loadSource(async (actions) => {
    const { data } = await axios.get("tag");
    for (const item of data) {
      const { data } = await axios.get("tag/" + item.id);
      item.equipments = data.equipments;
    }
    const collection = actions.addCollection("Tag");
    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        equipments: item.equipments,
      });
    }
  });
};
