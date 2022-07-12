function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('João', 'Admin');
usuarios.set('Lucas', 'User');
usuarios.set('Mônica', 'Admin');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));