export const orderNameFun = (bot, chatId, orderName, orderPrice) => {
    return   bot.sendMessage(chatId, "tanlovingiz uchun rahmat soni nechta", {
        reply_markup: {
            keyboard: [
                [
                    `${orderName} 1 kishilik `, `${orderName} 2 kishilik `
                ],
                [
                    "Ko'roq olmoqchiman"
                ],
                [
                    "Back to menu 🔙"
                ]
            ],
            resize_keyboard: true
        }
    })
}