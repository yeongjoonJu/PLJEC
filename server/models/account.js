import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

// 데이터 틀
const Account = new Schema({
    email: String,
    password: String,
    created: { type: Date, default: Date.now }
});

// generates hash, =>(arrow) 메서드 사용하면 작동 안 함
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

// compares the password
Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// model : 실제 데이터베이스에 접근할 수 있게 해주는 클래스
// model([collection_name] 단수형, [스키마 객체], optional: [collection_name 지정])
export default mongoose.model('account', Account);