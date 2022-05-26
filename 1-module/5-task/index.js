function truncate(str, maxlength) {

  let result = ""
  let strAdd = "…"

  if (str) {

    if (str.length > maxlength) {

      result = str.slice(0, maxlength-1) + strAdd
    
    }
    
    else {

      result = str

    }

  }

  return result

}
