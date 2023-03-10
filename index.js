const { Telegraf } = require("telegraf");
// const { shaxzodBot } = require("./secret.js");
// const bot = new Telegraf(shaxzodBot);

//require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
//console.log(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Xush kelibsiz"));
bot.help((ctx) => ctx.reply("sizga qanday yordam bera olaman"));

bot.hears("salom", (ctx) => ctx.reply("Voaleyko'm assalom!"));
bot.hears("sani kim yasadi", (ctx) => ctx.reply("Shaxzod!"));

bot.on("message", (ctx) => {
  const text = ctx.update.message.text;
  const low = text.toLowerCase();
  if (low == "soat") {
    let data = new Date();
    let hours = data.getHours();
    let minut = data.getMinutes();
    ctx.reply(hours.toString() + " : " + minut.toString());
    return ctx;
  }
  if (low == "kun") {
    let data = new Date();
    let day = data.getDate();
    ctx.reply(day.toString());
    return ctx;
  }
  if (low == "oy") {
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
  }
  if (low == "yil") {
    let data = new Date();
    let year = data.getFullYear();
    ctx.reply("hozir " + year.toString() + "-yil");
    return ctx;
  }

  ctx.reply(low + ` Bu xabaringizni tushnaolmadim! Uzur  `);

  console.log(low + ` Bu xabaringizni tushnaolmadim! Uzur  `);
});

bot.launch();
