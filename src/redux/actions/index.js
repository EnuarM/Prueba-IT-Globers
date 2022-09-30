export const SAVE_EMAILS = 'SAVE_EMAILS'

export function saveEmails(email) {
    return function (dispatch) {
        dispatch({
            type: SAVE_EMAILS,
            payload: email
        })
    }
}