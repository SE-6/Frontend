// enum Color {
//   Red = 2,
//   Green = 1,
//   Blue = 3,
// }

// let myColor: Color = Color.Blue;
// console.log(myColor);

// function getAccess(role: string) {
//   if (role === 'admin') {
//     console.log('full access');
//   } else if (role === 'user') {
//     console.log('limited access');
//   }
// }

// getAccess('Admin'); //  silent bug => typo
// getAccess('adming'); // typo, nothing happens, no error!

enum UserRole {
  Guest = 'guest',
  User = 'user',
  Admin = 'admin',
}

function getAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log('full access');
  } else if (role === UserRole.User) {
    console.log('Limited access');
  } else {
    console.log('read only');
  }
}

// getAccess(UserRole.Admin);
// getAccess(UserRole.User);
// getAccess('admin');

enum OrderStatus {
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED',
  Cancelled = 'CANCALLED',
}

function updateOrder(status: OrderStatus) {
  console.log(`Order is now ${status}`);
}

updateOrder(OrderStatus.Shipped);
updateOrder(OrderStatus.Delivered);
// updateOrder('shipped')
