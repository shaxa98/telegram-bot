const { Telegraf } = require("telegraf");
const { shaxzodBot } = require("./secret.js");

const bot = new Telegraf(shaxzodBot);
bot.start((ctx) => ctx.reply("Xush kelibsiz"));
bot.help((ctx) => ctx.reply("sizga qanday yordam bera olaman"));

bot.hears("salom", (ctx) => ctx.reply("Voaleyko'm assalom!"));
bot.hears("sani kim yasadi", (ctx) => ctx.reply("Shaxzod!"));
bot.hears("yil", (ctx) => {
  let data = new Date();
  let year = data.getFullYear();
  ctx.reply("hozir " + year.toString() + "-yil");
  return ctx;
});
bot.hears("oy", (ctx) => {
  const month = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentsbr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const data = new Date();
  let nmonth = month[data.getMonth()];
  ctx.reply("hozir " + nmonth.toString() + " oyi");
  return ctx;
});
bot.hears("kun", (ctx) => {
  let data = new Date();
  let day = data.getDate();
  ctx.reply(day.toString());
  return ctx;
});

bot.hears("soat", (ctx) => {
  let data = new Date();
  let hours = data.getHours();
  let minut = data.getMinutes();
  ctx.reply(hours.toString() + " : " + minut.toString());
  return ctx;
});
bot.on("message", (ctx) => {
  const text = ctx.update.message.text;
  const low = text.toLowerCase();

  ctx.reply(low + ` Bu xabaringizni tushnaolmadim! Uzur  `);

  console.log(low + ` Bu xabaringizni tushnaolmadim! Uzur  `);
});

bot.launch();
