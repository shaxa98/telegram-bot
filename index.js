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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = new Date();
  let nmonth = month[data.getMonth()];
  ctx.reply("hozir" + nmonth.toString() + " oyi");
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

bot.launch();
