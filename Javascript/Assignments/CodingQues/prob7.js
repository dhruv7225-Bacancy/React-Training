const roles = {
  admin: ["READ", "WRITE", "DELETE"],
  editor: ["READ", "WRITE"],
  viewer: ["READ"]
};

function canAccess(role, permission){
    switch(role){
        case "admin":
            return roles.admin.includes(permission)
            break;
        case "editor":
            return roles.editor.includes(permission)
            break;
        case "viewer":
            return roles.viewer.includes(permission)
            break;
        default:
            return false
    }
}
console.log(canAccess("admin", "DELETE")); // true
console.log(canAccess("viewer", "WRITE")); // false
console.log(canAccess("unknown", "READ")); // false

