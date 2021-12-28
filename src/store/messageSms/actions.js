
export const OPEN_MESSAGE_SMS = "MESSAGESMS::OPEN_MESSAGE_SMS";
export const OPEN_SNACK_BAR = "MESSAGESMS::OPEN_SNACK_BAR";



export const openMessageSms = () => ({
    type: OPEN_MESSAGE_SMS,
});

export const openSnackBar = (value) => ({
    type: OPEN_SNACK_BAR,
    payload:value
});










