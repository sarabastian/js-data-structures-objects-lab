// Write your solution in this file!
const driver = {
    name: 'Sara'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    
    return Object.assign({}, driver, { [key]: value})
 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
    const drive = Object.assign({}, driver)
    delete drive[key]
    return drive
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
 