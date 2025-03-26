export const createSlug = (name: string): string => {
  return name
    .toLowerCase() // Chuyển thành chữ thường
    .replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
    .replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
    .replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
    .replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
    .replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
    .replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
    .replace(/(đ)/g, 'd')
    .replace(/([^0-9a-z-\s])/g, '') // Loại bỏ ký tự đặc biệt
    .replace(/(\s+)/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
    .replace(/-+/g, '-') // Loại bỏ dấu gạch ngang liên tiếp
    .replace(/^-+/g, '') // Loại bỏ dấu gạch ngang ở đầu
    .replace(/-+$/g, '') // Loại bỏ dấu gạch ngang ở cuối
}
