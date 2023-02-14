let user = {
    name: "Venkat",
    address: {
        personal: {
            city: "Nellore",
            state: "AP",
            area: "Ravur",
        },
        office: {
            city: "Hyderabad",
            area: {
                landmark: "Hi Tech",
            }
        }
    }
}

const recursion = (obj, parentText, finalOp) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            recursion(obj[key], parentText + " > " + key, finalOp)
        } else {
            finalOp[parentText + " > " + key] = obj[key]
        }
    }
}

let finalOp = {}
recursion(user, 'user', finalOp)
console.log(finalOp)
