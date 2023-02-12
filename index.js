const { Telegraf } = require("telegraf");
const { shaxzodBot } = require("./secret.js");

const bot = new Telegraf(shaxzodBot);
bot.start((ctx) => ctx.reply("Xush kelibsiz"));
bot.help((ctx) => ctx.reply("sizga qanday yordam bera olaman"));

bot.hears("salom", (ctx) => ctx.reply("Voaleyko'm assalom!"));
bot.hears("sani kim yasadi", (ctx) => ctx.reply("Shaxzod!"));
bot.launch();
