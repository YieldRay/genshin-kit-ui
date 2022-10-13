export function isValidCnUid(uid) {
    const uidNum = +uid;
    return isValidUid(uidNum) && ["1", "2", "5"].includes(uidNum.toString()[0]);
}

export function isValidOsUid(uid) {
    const uidNum = +uid;
    return isValidUid(uidNum) && ["6", "7", "8", "9"].includes(uidNum.toString()[0]);
}

export function isValidUid(uid) {
    return !isNaN(uid) && uid.toString().length === 9;
}
