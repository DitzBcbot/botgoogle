let handler = async (m) => m.reply(`
${['jan toxic lah bng πΏ',
 'ketikan nya dijaga ya beb πΏ',
 'sekali lgi toxic, gw entod lu πΏ',
 'dimohon utk tidak toxic πΏπ'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.customPrefix = /ajg|anjg|anjing|babi|bgst|bngst|bangsat|asu|ngentot|kontol|kntol|kntl|memek|memeq|mmek|mmk|jancok|jncok|jnck|pantek|pntk|pntek|goblok|gblok|gblk|pepek|bangke|tolol/i
handler.command = new RegExp

export default handler
