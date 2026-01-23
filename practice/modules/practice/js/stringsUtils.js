const capitalize = ((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
})

const reverse = ((str) => [...str].reverse().join(""))

export {reverse, capitalize}