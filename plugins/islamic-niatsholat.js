let handler = async m => m.reply(`

*NIAT SHOLAT SHUBUH* :
*ᴀʀᴀʙɪᴄ :*  
"اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى"
*ʟᴀᴛɪɴ :*
"Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
*ᴛᴇʀᴊᴇᴍᴀʜᴀɴ :*
"Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala"


*NIAT SHOLAT DZUHUR* :
*ᴀʀᴀʙɪᴄ :*
"اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
*ʟᴀᴛɪɴ :*
"Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
*ᴛᴇʀᴊᴇᴍᴀʜᴀɴ :*
"Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala"


*NIAT SHOLAT ASHAR* :
*ᴀʀᴀʙɪᴄ :*
"اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
*ʟᴀᴛɪɴ :*
"Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
*ᴛᴇʀᴊᴇᴍᴀʜᴀɴ :*
"Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala"


*NIAT SHOLAT MAGHRIB* :
*ᴀʀᴀʙɪᴄ :*
"اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
*ʟᴀᴛɪɴ :*
"Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
*ᴛᴇʀᴊᴇᴍᴀʜᴀɴ :*
"Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala"


*NIAT SHOLAT ISYA* :
*ᴀʀᴀʙɪᴄ :*
"اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
*ʟᴀᴛɪɴ :*
"Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
*ᴛᴇʀᴊᴇᴍᴀʜᴀɴ :*
"Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala"

`.trim())


handler.tags = ['islamic']
handler.help = ['niatsholat']
handler.command = /^niatsholat$/i

export default handler