exports.mekeRandomCode = (length) => {
    let code = 'str';
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        code += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return code;
};
