export const safeJsonParse = (json: string | undefined) => {
  try {
    if (!json) throw 'invalid string'
    const jsonParse = JSON.parse(json)
    return jsonParse
  } catch (e) {
    console.log(e)
    return undefined
  }
}
