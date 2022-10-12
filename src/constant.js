export const APIURL = "http://localhost:3000"

export function GetEmbed(req){
    return `http://localhost:3000/${req.row}/${req.id}?_embed=${req.embed}`
}